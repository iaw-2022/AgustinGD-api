const database = require('../database/database');

class CategoryDAO {
    getAll() {
        return database('categorias');
    }
}

module.exports = new CategoryDAO();