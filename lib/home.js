const homeData = require('./../models/home')

module.exports = async(ctx) => {

	var data=await homeData.getInfo()
	await ctx.render('index',data)

}