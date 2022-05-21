const productoDAO = require('../dao/productDAO');

class ProductoController{
    async getAll(req, res){
        productoDAO.getAll()
        .then( productos =>{
            res.status(200).json(productos)
        })
        .catch( error =>{
            res.status(500).json({ message: 'No se pudieron recuperar los productos'})
        })
    }        

    async getRandomLimited(req, res){
        productoDAO.getRandomLimited(req.params)
        .then( productos =>{
            res.status(200).json(productos)
        })
        .catch( error =>{
            res.status(500).json({ message: 'No se pudieron recuperar los productos'})
        })
    }

    async getProductFromCategory(req, res){
        productoDAO.getProductFromCategory(req.params)
        .then( productos =>{
            res.status(200).json(productos)
        })
        .catch( error =>{
            res.status(500).json({ message: 'No se pudieron recuperar los productos'})
        })
    }
}

module.exports = new ProductoController();