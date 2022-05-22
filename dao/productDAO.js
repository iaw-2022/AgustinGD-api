const database = require('../database/database');

class ProductDAO {
    getAll() {
        return database('productos');
    }

    getProductById(params) {
        const { id } = params
        return database('productos').where('id', id);
    }

    getProductByMultipleId(params) {
        const { ids } = params

        return database('productos').where((builder) =>
            builder.whereIn('id', ids)
        ).orderBy('id');
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