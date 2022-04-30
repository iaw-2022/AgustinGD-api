const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const server = express();
const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title: "API granja",
            description: "API para productos de la granja",
            contact: {
                name: "Agustin Emanuel Gonzalez Diaz"
            },
            servers: ["lamejorurl"]
        }
    },
    apis: ["index.js"]
}

const swaggerDocs = swaggerJsdoc(swaggerOptions);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = 5000;
server.listen(PORT, () => {
    console.log('\n Bienvenido a la api')
})