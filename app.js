const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const convert = require('koa-convert')
const views = require('koa-views')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const routerCache = require('koa-router-cache')
const MemoryCache = routerCache.MemoryCache;

const session = require('koa-session-minimal')
const redisStore = require('koa-redis')
const flash = require('koa-flash')
const gzip = require('koa-gzip')

const routers = require('./routers/index')

const app = new Koa();

// 存放sessionId的cookie配置
let cookie = {
	maxAge: '', // cookie有效时长
	expires: '', // cookie失效时间
	path: '', // 写cookie所在的路径
	domain: '', // 写cookie所在的域名
	httpOnly: '', // 是否只用于http请求中获取
	overwrite: '', // 是否允许重写
	secure: '',
	sameSite: '',
	signed: ''
}

// 配置session中间件
app.use(session({
	key: 'USER_SID',
	store: redisStore(),
	cookie: cookie
}))

// 配置控制台日志中间件
app.use(convert(koaLogger()))

// 配置ctx.body解析中间件
app.use(bodyParser())

// 配置静态资源加载中间件
app.use(convert(koaStatic(
	path.join(__dirname, './assets')
)))

//配置flash中间件，保存第一次访问有效的数据
app.use(flash());

//路由器缓存
app.use(routerCache(app, {
	'GET /': {
      key: 'cache:index',
      expire: 2 * 1000,
      get: MemoryCache.get,
      set: MemoryCache.set,
      destroy: MemoryCache.destroy,
      passthrough: function* passthrough(_cache) {
        // 游客
        if (!this.session || !this.session.isLogin) {
          if (_cache == null) {
            return {
              shouldCache: true,
              shouldPass: true
            };
          }
          this.type = 'text/html; charset=utf-8';
          this.set('content-encoding', 'gzip');
          this.body = _cache;
          return {
            shouldCache: true,
            shouldPass: false
          };
        }
        // 已登录用户
        return {
          shouldCache: false,
          shouldPass: true
        };
      }
    }
}));
app.use(gzip());


// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
	extension: 'ejs'
}))

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(3000)