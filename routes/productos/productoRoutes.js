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

/** 
 * @swagger
 * /api/productos/random/{cantidad_productos}:
 *   get:
 *      description: Recupera X de todos los productos al azar.
 *      tags: 
 *          - Productos 
 *      parameters:
 *          - in: path
 *            name: cantidad_productos
 *            schema:
 *              type: integer
 *            required: true
 *            description: cantidad de productos random 
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
 *          '500':
 *              description: Error del servidor
 */
 router.get('/random/:cantidad_productos', productoController.getRandomLimited);

module.exports = router;