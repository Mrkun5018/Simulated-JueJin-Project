module.exports = {
    jwt: {
        secret: 'Josiah', //secret: 解析口令, 需要和加密的时候一致
        algorithms: ['HS256'], //algorithms: 加密方式: SHA256 加密方式在 express-jwt 里面叫做 HS256
        expiresIn: 60,
        unless: { 
            //path: 不需要验证 token 的路径标识符
            "path": ["/login", "/banner", "/", "/api/keyword"] 
        }
    }
}

