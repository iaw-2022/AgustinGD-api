const database = require('../database/database');

class CategoryDAO {
    getAll() {
        return database('categorias');
    }

    getRandomLimited(params) {
        const { cantidad_categorias } = params
        return database('categorias').orderByRaw('RANDOM()').limit(cantidad_categorias);
    }

    getByName(params) {
        const { nombre } = params
        const nombreLower = nombre.toLowerCase();
        return database('categorias').whereRaw(`LOWER(nombre) LIKE ?`, `%${nombreLower}%`);
    }
}

module.exports = new CategoryDAO();