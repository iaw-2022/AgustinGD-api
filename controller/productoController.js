const productoService = require('./../service/productoService');

class ProductoController{
    async getAll(req, res){
        productoService.getAll()
        .then( productos =>{
            res.status(200).json(productos)
        })
    }
}

module.exports = new ProductoController();