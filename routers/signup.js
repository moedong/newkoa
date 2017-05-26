
const router = require('koa-router')()
const index = require('./../lib/signup')

module.exports = router.get('/', index.get).post('/',index.post)
