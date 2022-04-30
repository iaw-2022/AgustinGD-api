const productoDAO = require('./../dao/productoDAO');

class ProductoService{
    getAll(){
        return productoDAO.getAll();
    }
}

module.exports = new ProductoService();