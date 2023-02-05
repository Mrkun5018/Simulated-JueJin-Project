const router = require('express').Router()

router.post('/login', function(req, res) {
    console.log('requst1', req)
    console.log('requst2', res)
  })

  module.exports = router
