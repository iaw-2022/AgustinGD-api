const express = require('express');

const server = express();

const swaggerConfig = require('./swaggerConfig');
server.use('/api-docs', swaggerConfig.serve, swaggerConfig.setup);

const PORT = 5000;
server.listen(PORT, () => {
    console.log('\n Bienvenido a la api')
})