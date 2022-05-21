const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition:{
        openapi: "3.0.3",
        info:{
            title: "API granja",
            description: "API para productos de la granja",
            contact: {
                name: "Agustin Emanuel Gonzalez Diaz"
            }, 
            servers: [
              {
                "url": "https://api-granja-agustingd.herokuapp.com/",
                "description": "Server de produccion"
              }
            ],
            version: "1.0.0"
        }
    },
    apis: [ 
        "./routes/*/*.js", 
        "./schemas/*.js"
    ]
}
const swaggerDocs = swaggerJsdoc(swaggerOptions);

const serve = swaggerUi.serve;
const setup = swaggerUi.setup(swaggerDocs);
module.exports = {
    serve,
    setup,
};