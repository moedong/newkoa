const router = require('koa-router')()

const home = require('./home')
const signin = require('./signin')
const logout = require('./logout')
const signup = require('./signup')
const customerService = require('./customerService')

router.use('/', home.routes(), home.allowedMethods())
router.use('/signin', signin.routes(), signin.allowedMethods())
router.use('/logout', logout.routes(), logout.allowedMethods())
router.use('/signup', signup.routes(), signup.allowedMethods())
router.use('/customerService', customerService.routes(), customerService.allowedMethods())

module.exports = router
