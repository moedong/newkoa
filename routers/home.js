
const router = require('koa-router')()
const index = require('./../lib/home')

module.exports = router.get('/', index)
