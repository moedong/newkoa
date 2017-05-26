
const router = require('koa-router')()
const index = require('./../lib/logout')

module.exports = router.get('/', index.get)
