const config = require('./config');
const express = require('express');
const router = require('./routes/routes');

const server = express();

server.use(express.json());

const swaggerConfig = require('./swaggerConfig');
server.use('/api-docs', swaggerConfig.serve, swaggerConfig.setup);

server.use('/api', router);

const port = config.PORT || 5000;
server.listen(port, () => {
    console.log('\n Bienvenido a la api, escuchando en puerto:', port);
});