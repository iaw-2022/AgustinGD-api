require('dotenv').config();

module.exports = {
    API_PORT: process.env.API_PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_ENVIRONMENT: process.env.DATABASE_ENVIRONMENT,    
}