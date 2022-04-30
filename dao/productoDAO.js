const db = require('./../database/databaseConfig');

class ProductoDAO{
    async getAll(){
        return db('productos');
    }
}

module.exports = new ProductoDAO();