const config = require('./../config');

module.exports = {
    production:{
        client: "pg",
        connection: { 
            connectionString: config.DATABASE_URL,
            ssl: { rejectUnauthorized: false }
        },
        pool:{
            min: 2,
            max: 10,
        },        
    },
}
