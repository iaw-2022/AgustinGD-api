const productoService = require('./../service/productoService');

class ProductoController{
    async getAll(req, res){
        productoService.getAll()
        .then( productos =>{
            res.status(200).json(productos)
        })
        .catch( error =>{
            res.status(500).json({ message: 'No se pudieron recuperar los productos'})
        })
    }
}

module.exports = new ProductoController();