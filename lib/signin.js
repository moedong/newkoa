//const homeData = require('./../models/signin')

module.exports.get= async(ctx) => {
	await ctx.render('signin',{})
}

module.exports.post= async(ctx) => {

	// let formData = ctx.request.body
 //    let result = {
 //      success: false,
 //      message: '',
 //      data: null,
 //      code: ''
 //    }

 //    let userResult = await userInfoService.signIn( formData )

 //    if ( userResult ) {
 //      if ( formData.userName === userResult.name ) {
 //        result.success = true
 //      } else {
 //        result.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
 //        result.code = 'FAIL_USER_NAME_OR_PASSWORD_ERROR'
 //      }
 //    } else {
 //      result.code = 'FAIL_USER_NO_EXIST',
 //      result.message = userCode.FAIL_USER_NO_EXIST
 //    }

 //    if ( formData.source === 'form' && result.success === true ) {
 //      let session = ctx.session
 //      session.isLogin = true
 //      session.userName = userResult.name
 //      session.userId = userResult.id

      ctx.redirect('/')
    // } else {
    //   ctx.body = result
    // }
}