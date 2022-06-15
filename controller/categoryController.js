const CategoryDAO = require('./../dao/categoryDAO');

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

    async getByName(req, res) {
        CategoryDAO.getByName(req.params)
            .then(categorias => {
                res.status(200).json(categorias)
            })
            .catch(error => {
                res.status(500).json({ message: 'No se pudo recuperar la categoria' })
            })
    }
}

module.exports = new CategoryController();