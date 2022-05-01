const express = require('express');
const productoController = require('../../controller/productoController');

const router = express.Router();

/** 
 * @swagger
 * /api/productos:
 *  get:
 *      description: Recupera todos los productos
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
*/
router.get('/', productoController.getAll);

module.exports = router;