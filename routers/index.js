const router = require('koa-router')()

const home = require('./home')
const signin = require('./signin')

router.use('/', home.routes(), home.allowedMethods())
router.use('/signin', signin.routes(), signin.allowedMethods())

module.exports = router
