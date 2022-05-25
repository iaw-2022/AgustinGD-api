const express = require('express');
const orderController = require('../../controller/orderController');
const jwtCheck = require('../../checkAuth')

const router = express.Router();

/** 
 * @swagger
 * /api/pedidos:
 *  post:
 *      summary: Añadir pedidos.
 *      description: Añade un conjunto de pedidos. 
 *      tags: 
 *      - Pedidos
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                oneOf:
 *                  - $ref: '#/components/schema/PedidoPost'
 *                  - $ref: '#/components/schema/PedidoPost2'
 *      responses:
 *        201:
 *         description: Se crearon con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 oneOf:
 *                   - example:
 *                       id: 1
 *                   - example:
 *                       id: 2
 *        500:
 *         description: Error del servidor
*/
router.post('/', jwtCheck, orderController.addOrder);

/** 
 * @swagger
 * /api/pedidos/cliente:
 *  get:
 *      summary: Recuperar los pedidos del cliente.
 *      description: Recupera los pedidos del cliente autenticado. 
 *      tags: 
 *      - Pedidos
 *      responses:
 *        201:
 *         description: Se crearon con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 oneOf:
 *                   - example:
 *                       id: 1
 *                   - example:
 *                       id: 2
 *        500:
 *         description: Error del servidor
*/
router.get('/cliente', jwtCheck, orderController.getClientOrders);

module.exports = router;