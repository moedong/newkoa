//const homeData = require('./../models/signin')

module.exports.get = async(ctx) => {

	let session = ctx.session;
	session.isLogin=false;

	ctx.state = {
		session:session
	}
	ctx.redirect('/')
	
}