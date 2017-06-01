
const router = require('koa-router')()
const index = require('./../lib/customerService')

module.exports = router.get('/', index)
