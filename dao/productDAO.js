const database = require('../database/database');

class ProductDAO {
    getAll() {
        return database('productos');
    }

    getProductById(params) {
        const { id } = params
        return database('productos').where('id', id);
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

module.exports = new ProductDAO();