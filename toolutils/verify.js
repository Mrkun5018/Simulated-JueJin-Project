const jwt = require('jsonwebtoken')
const jwt_config = require('../config').jwt


function create_token(userInfo) {  // 生成 token
    return 'Bearer ' + jwt.sign(userInfo, jwt_config.secret, { expiresIn: jwt_config.expiresIn })
}

function verify_error_handle(err, req, res, next) {  // 错误处理中间件
    return res.send({ err })
}

function verifyRule() {
    return { secret: jwt_config.secret,  algorithms: jwt_config.algorithms }
}

function verify_unless_router() { 
    return jwt_config.unless 
}

module.exports = {
    verify_error_handle: verify_error_handle,
    verifyRule: verifyRule,
    verify_unless_router: verify_unless_router,
    create_token: create_token,
}