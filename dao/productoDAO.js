const database = require('../database/database');

class ProductoDAO{
    async getAll(){
        return database('productos');
    }
}

module.exports = new ProductoDAO();