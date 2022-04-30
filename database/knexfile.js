const config = require('./../config');

module.exports = {
    production:{
        client: "pg",
        connection: { 
            connectionString: process.env.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        },
        pool:{
            min: 2,
            max: 10,
        },        
    },
}
