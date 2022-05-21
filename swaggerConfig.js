const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

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
    apis: [ "./routes/*/*.js"]
}
const swaggerDocs = swaggerJsdoc(swaggerOptions);

const serve = swaggerUi.serve;
const setup = swaggerUi.setup(swaggerDocs);
module.exports = {
    serve,
    setup,
};