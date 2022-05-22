const orderDAO = require('../dao/orderDAO');

class OrderController {
    async addOrder(req, res) {
        orderDAO.addOrder(req.body)
            .then(orders => {       
                res.status(201).json(orders)
            })
            .catch(error => {
                res.status(500).json({ message: 'No se pudo añadir el pedido' })
            })
    }
}

module.exports = new OrderController();