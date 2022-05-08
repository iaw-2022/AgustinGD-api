const express = require('express');
const productoController = require('../../controller/productoController');

const router = express.Router();

/** 
 * @swagger
 * /api/productos:
 *  get:
 *      description: Recupera todos los productos. 
 *      tags: 
 *       - Productos
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
 *          '500':
 *              description: Error del servidor
*/
router.get('/', productoController.getAll);

module.exports = router;