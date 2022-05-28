const productoDAO = require('../dao/productDAO');

class ProductController{
    async getAll(req, res){
        productoDAO.getAll()
        .then( products =>{
            res.status(200).json(products)
        })
        .catch( error =>{
            res.status(500).json({ message: 'No se pudieron recuperar los productos'})
        })
    }

    async getByName(req, res){
        productoDAO.getByName(req.params)
        .then( products =>{
            res.status(200).json(products)
        })
        .catch( error =>{
            res.status(500).json({ message: 'No se pudo recuperar el producto'})
        })
    }

    async getRandomLimited(req, res){
        productoDAO.getRandomLimited(req.params)
        .then( products =>{
            res.status(200).json(products)
        })
        .catch( error =>{
            res.status(500).json({ message: 'No se pudieron recuperar los productos'})
        })
    }

    async getProductFromCategory(req, res){
        productoDAO.getProductFromCategory(req.params)
        .then( products =>{
            res.status(200).json(products)
        })
        .catch( error =>{
            res.status(500).json({ message: 'No se pudieron recuperar los productos'})
        })
    }
}

module.exports = new ProductController();