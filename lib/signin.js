const userData = require('./../models/signin')

module.exports.get = async(ctx) => {
	let session = ctx.session;
	let flash= ctx.flash;
	ctx.state = {
		session: session,
		flash: flash
	}
	if (ctx.session.isLogin) {
		await ctx.redirect('/')
	} else {
		await ctx.render('signin')
	}
}

module.exports.post = async(ctx) => {
	let session = ctx.session;
	let formData = ctx.request.body;
	let data = await userData.getInfo();
	let flash= ctx.flash;
	if (data.state == 1 && formData.name == data.username && formData.password == data.password) {
		session.isLogin = true;
		session.userName = data.username;
		ctx.flash = {success: '登录成功!'};
		ctx.state = {
			session: session,
			flash:flash
		}
		ctx.redirect('/');

	} else{

		ctx.flash = {error: '用户名或密码错误!'};
		ctx.state = {
			session: session,
			flash:flash
		}
		await ctx.redirect('/signin')
		//ctx.response.type = 'text/html';
		//ctx.response.body = '密码错误,<a href="/signin">重新登录</a>'
	}

}