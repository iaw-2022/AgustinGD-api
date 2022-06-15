const express = require('express');
const cors = require("cors")
const swaggerConfig = require('./swaggerConfig');
const router = require('./routes/routes');
const { unauthorizedErrorHandler } = require('./checkAuth')
const config = require('./config');

const server = express();

server.use(cors());
server.use(express.json());
server.use('/api-docs', swaggerConfig.serve, swaggerConfig.setup);
server.use('/api', router);
server.use(unauthorizedErrorHandler);

const port = config.PORT || 5000;
server.listen(port, () => {
    console.log('\n Bienvenido a la api, escuchando en puerto:', port);
});