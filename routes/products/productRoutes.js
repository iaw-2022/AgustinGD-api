const express = require('express');
const productController = require('../../controller/productController');

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
router.get('/', productController.getAll);

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
 router.get('/random/:cantidad_productos', productController.getRandomLimited);

 /** 
 * @swagger
 * /api/productos/categoria/{categoria_id}:
 *   get:
 *      description: Recupera todos los productos de la categoria X.
 *      tags: 
 *          - Productos 
 *      parameters:
 *          - in: path
 *            name: categoria_id
 *            schema:
 *              type: integer
 *            required: true
 *            description: id de la categoria de los productos
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
 *          '500':
 *              description: Error del servidor
 */
  router.get('/categoria/:categoria_id', productController.getProductFromCategory);

module.exports = router;