const homeData = require('./../models/home')

module.exports = async(ctx) => {

	let session = ctx.session;
	let flash= ctx.flash;
	let query=ctx.request.query;

	var data=null;

	if(session.isLogin){

		data=await homeData.getInfo();
		if(data.state==1){
			session.isLogin=true;
			session.userName=data.username;
		}
		
	}

	ctx.state = {
		session:session,
		flash:flash,
		talkTo:query
	}

	if(!session.isLogin){

		await ctx.redirect('/signin')

	}else{

		await ctx.render('customerService')

	}

}