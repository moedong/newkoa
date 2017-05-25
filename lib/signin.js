//const homeData = require('./../models/signin')

module.exports.get = async(ctx) => {

	ctx.state = {
		session: this.session,
		title: 'app',
		username: 'hfpp2012'
	}
	await ctx.render('signin')
}

module.exports.post = async(ctx) => {
	ctx.redirect('/')
}