const orderDAO = require('../dao/orderDAO');
const getClienInfoFromToken = require('../utils/getClienInfoFromToken');

class OrderController {
    async addOrder(req, res) {
        const clientInfo = await getClienInfoFromToken(req);

        orderDAO.addOrder(req.body, clientInfo)
            .then(orders => {
                res.status(201).json(orders)
            })
            .catch(error => {
                res.status(500).json({ message: 'No se pudo añadir el pedido' })
            })
    }

    async getClientOrders(req, res) {        
        const clientInfo = await getClienInfoFromToken(req);

        orderDAO.getClientOrders(clientInfo)
            .then(orders => {
                res.status(200).json(orders)
            })
            .catch(error => {
                res.status(500).json({ message: 'No se pudieron recuperar los pedidos' })
            })
    }
}

module.exports = new OrderController();