const database = require('../database/database');

class ProductoDAO {
    getAll() {
        return database('productos');
    }

    getRandomLimited(params) {
        const { cantidad_productos } = params
        return database('productos').orderByRaw('RANDOM()').limit(cantidad_productos);
    }

    getProductFromCategory(params) {
        const { categoria_id } = params
        return database('productos').where('categoria_id', categoria_id);
    }
}

module.exports = new ProductoDAO();