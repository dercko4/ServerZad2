const crypto = require('crypto')

module.exports = function (req, res, next) {
if (req.method === "OPTIONS") {
next()
}
try {
    if (req.headers.authorization) {
        let tokenParts = req.headers.authorization
            .split(' ')[1]
            .split('.');
        let signature = crypto
            .createHmac('SHA256', process.env.SECRET_KEY)
            .update(`${tokenParts[0]}.${tokenParts[1]}`)
            .digest('base64');
        let sig1 = signature.slice(0, -1) 
        if (sig1 === tokenParts[2])
            req.user = JSON.parse(
                Buffer.from(
                    tokenParts[1],
                    'base64'
                ).toString('utf8')
            )
                
        next()
}} catch (e) {
res.status(401).json({message: "Не авторизован"})
}
}