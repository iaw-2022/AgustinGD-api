const database = require('../database/database');

class CategoryDAO {
    getAll() {
        return database('categorias');
    }

    getRandomLimited(params) {
        const { cantidad_categorias } = params
        return database('categorias').orderByRaw('RANDOM()').limit(cantidad_categorias);
    }
}

module.exports = new CategoryDAO();