//const userData = require('./../models/signup')

module.exports.get = async(ctx) => {
	let session = ctx.session;
	let flash= ctx.flash;

	ctx.state = {
		session: session,
		flash: flash
	}
	await ctx.render('signup')
}

module.exports.post = async(ctx) => {
	//let session = ctx.session;
	//let formData = ctx.request.body;

	ctx.response.type = 'text/html';
	ctx.response.body = '注册成功,<a href="/">返回首页</a>'

}