const database = require('../database/database');

class ProductoDAO {
    getAll() {
        return database('productos');
    }

    getRandomLimited(params) {
        const { cantidad_productos } = params
        return database('productos').orderByRaw('RANDOM()').limit(cantidad_productos);
    }
}

module.exports = new ProductoDAO();