const config = require('./../config');
const dataBaseEngine = config.DATABASE_ENVIRONMENT || 'production';
const dataBaseConfig = require('./knexfile')[dataBaseEngine];

module.exports = require("knex")(dataBaseConfig);