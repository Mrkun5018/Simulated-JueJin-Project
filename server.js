const express = require('express')

const verify = require('./toolutils/verify')
const { expressjwt: jwt } = require("express-jwt")

const app = express()
const rule = verify.verifyRule()
const unless_router = verify.verify_unless_router()


app.use(jwt(rule).unless(unless_router))
app.use((err, req, res, next) => { res.send({ err })})

// router
app.use(require('./app/api'))
app.use(require('./app/user'))

// mian
app.get('/', function(req, res) {
  res.send('<h1>hello world</h1>')
})

const server = app.listen(8081, function () {
  const address = server.address()
  const addr = address.address === '::' ? '127.0.0.1' : address.address
  console.log("================================================")
  console.log("=== service started successfully!")
  console.log("=== the access address is %s http://%s:%s", address.family, addr, address.port)
  console.log("================================================")
})