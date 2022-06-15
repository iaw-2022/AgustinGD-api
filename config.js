require('dotenv').config();

module.exports = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_ENVIRONMENT: process.env.DATABASE_ENVIRONMENT,
    AUTH0_JWKSURI: process.env.AUTH0_JWKSURI,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_ISSUER: process.env.AUTH0_ISSUER,
    AUTH0_ALGORITHM: process.env.AUTH0_ALGORITHM,   
}