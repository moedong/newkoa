var ServerApi = require('./ServerAPI.js');

var AppKey = 'cf1c467f8ecfa7a32fab51a59304c45c';
var AppSecret = 'f5436faefbfb';
//创建对象实例
var p = new ServerApi(AppKey,AppSecret);

//参数包装在对象中，使用回调函数异步获取数据结果，第一个回调参数为error，第二个为真实结果，为json对象
//创建云信Id
p.createUserId({
        'accid':'003',
        'name':'',
        'props':'',
        'icon':'',
        'token':''
    },function(err,data){
        // console.log('err',err);
        console.log('data',data)
    });

