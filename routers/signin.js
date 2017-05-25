
const router = require('koa-router')()
const index = require('./../lib/signin')

module.exports = router.get('/', index.get).post('/',index.post)
