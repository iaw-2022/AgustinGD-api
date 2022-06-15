var { expressjwt: jwt } = require("express-jwt");
var jwks = require('jwks-rsa');
const config = require('./config')

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: config.AUTH0_JWKSURI,
    }),
    audience: config.AUTH0_AUDIENCE,
    issuer: config.AUTH0_ISSUER,
    algorithms: [config.AUTH0_ALGORITHM],
});

const unauthorizedErrorHandler = (err, req, res, next) => {
    if(err.name === "UnauthorizedError")
        res.status(401).json({ message: 'No estas autorizado' });
}

module.exports = {
    jwtCheck,
    unauthorizedErrorHandler
}