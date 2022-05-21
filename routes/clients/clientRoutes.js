const express = require('express');
const clientController = require('../../controller/clientController');

const router = express.Router();

/** 
 * @swagger
 * /api/clientes/{email}:
 *  get:
 *      description: Recupera a un cliente segun su email. 
 *      tags: 
 *      - Clientes
 *      parameters:
 *      - in: path
 *        name: email
 *        schema:
 *          type: string
 *          format: email
 *        required: true
 *        description: email del cliente
 *      responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schema/Cliente'
 *       404:
 *         description: No se encontro el cliente
 *         content:
 *           application/json:
 *             schema:
 *               example: []
 *                 
 *       500:
 *         description: Error del servidor
*/
router.get('/:email', clientController.getClientByEmail);

/** 
 * @swagger
 * /api/clientes:
 *  post:
 *      description: Añade al cliente retornando el id en caso de exito. 
 *      tags: 
 *      - Clientes
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schema/ClientePost'
 *      responses:
 *        201:
 *         description: Se creo con exito
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 example:
 *                   id: 1
 *        500:
 *         description: Error del servidor
*/
router.post('/', clientController.addClient);

module.exports = router;