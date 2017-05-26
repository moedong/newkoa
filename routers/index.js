const router = require('koa-router')()

const home = require('./home')
const signin = require('./signin')
const logout = require('./logout')
const signup = require('./signup')

router.use('/', home.routes(), home.allowedMethods())
router.use('/signin', signin.routes(), signin.allowedMethods())
router.use('/logout', logout.routes(), logout.allowedMethods())
router.use('/signup', signup.routes(), signup.allowedMethods())

module.exports = router
