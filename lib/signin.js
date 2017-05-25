//const homeData = require('./../models/signin')

module.exports.get= async(ctx) => {
	let session = ctx.session
     session.isLogin = true
	await ctx.render('signin',{a:1})
}

module.exports.post= async(ctx) => {
	ctx.redirect('/')
}