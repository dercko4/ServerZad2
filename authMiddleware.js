const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
if (req.method === "OPTIONS") {
next()
}
try {
const token = req.headers.authorization.split(' ')[1] // Bearer token
if (!token) {
return res.status(401).json({message: "Не авторизован"})
}
const decoded = jwt.verify(token, process.env.SECRET_KEY)
req.user = decoded
next()
} catch (e) {
res.status(401).json({message: "Не авторизован"})
}
};


/*
module.exports = function(req, res, next)
{
    if (req.method === "OPTIONS") {
        next()
    }
    if (req.headers.authorization) 
    {
        let tokenParts = req.headers.authorization
            .split(' ')[1]
            .split('.');
        let signature = crypto
            .createHmac('SHA256', tokenKey)
            .update(`${tokenParts[0]}.${tokenParts[1]}`)
            .digest('base64');
  
        if (signature === tokenParts[2])
            req.user = JSON.parse(
                Buffer.from(
                    tokenParts[1],
                    'base64'
                ).toString('utf8')
            );
            console.log(req.user);
        next();
    }
}
*/