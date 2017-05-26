const homeData = require('./../models/home')

module.exports = async(ctx) => {

	let session = ctx.session;
	let flash= ctx.flash;

	var data=null;

	if(session.isLogin){

		data=await homeData.getInfo();
		if(data.state==1){
			session.isLogin=true;
			session.userName=data.username;
		}
		console.log(ctx.session);
	}

	ctx.state = {
		session:session,
		flash:flash
	}

	await ctx.render('index')

}