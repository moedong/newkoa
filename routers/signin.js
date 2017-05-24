
const router = require('koa-router')()
const index = require('./../lib/signin')

module.exports = router.get('/signin', index.get).post('signin',index.post)
