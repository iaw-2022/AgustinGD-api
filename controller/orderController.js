const orderDAO = require('../dao/orderDAO');
const getClientIdFromToken = require('../utils/getClientEmailFromToken');

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

    async getClientOrders(req, res) {        
        const email_cliente = await getClientIdFromToken(req);

        orderDAO.getClientOrders(email_cliente)
            .then(orders => {
                res.status(200).json(orders)
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ message: 'No se pudieron recuperar los pedidos' })
            })
    }
}

module.exports = new OrderController();