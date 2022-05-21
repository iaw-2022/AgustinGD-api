const CategoryDAO = require('../dao/CategoryDAO');

class CategoryController {
    async getAll(req, res) {
        CategoryDAO.getAll()
            .then(productos => {
                res.status(200).json(productos)
            })
            .catch(error => {
                res.status(500).json({ message: 'No se pudieron recuperar las categorias' })
            })
    }
}

module.exports = new CategoryController();