const CategoryDAO = require('../dao/CategoryDAO');

class CategoryController {
    async getAll(req, res) {
        CategoryDAO.getAll()
            .then(categorias => {
                res.status(200).json(categorias)
            })
            .catch(error => {
                res.status(500).json({ message: 'No se pudieron recuperar las categorias' })
            })
    }

    async getRandomLimited(req, res) {
        CategoryDAO.getRandomLimited(req.params)
            .then(categorias => {
                res.status(200).json(categorias)
            })
            .catch(error => {
                res.status(500).json({ message: 'No se pudieron recuperar las categorias' })
            })
    }
}

module.exports = new CategoryController();