const express = require('express');
const productController = require('../../controller/productController');

const router = express.Router();

/** 
 * @swagger
 * /api/productos:
 *  get:
 *      summary: Recupera todos los productos.
 *      description: Recupera todos los productos. 
 *      tags: 
 *       - Productos
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
 *              content:
 *                application/json:
 *                  schema:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schema/Producto'
 *          '500':
 *              description: Error del servidor
*/
router.get('/', productController.getAll);

/** 
 * @swagger
 * /api/productos/{id}:
 *  get:
 *      summary: Recupera producto segun id.
 *      description: Recupera un producto segun su id. 
 *      tags: 
 *      - Productos
 *      parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          format: int64
 *        required: true
 *        description: id del producto
 *      responses:
 *        200:
 *          description: Respuesta exitosa
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schema/Producto'
 *        404:
 *          description: No se encontro el producto
 *          content:
 *            application/json:
 *              schema:
 *                example: []                  
 *        500:
 *          description: Error del servidor
*/
 router.get('/:id', productController.getProductById);

/** 
 * @swagger
 * /api/productos/random/{cantidad_productos}:
 *   get:
 *      summary: Recupera productos al azar.
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
 *              content:
 *                application/json:
 *                  schema:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schema/Producto'
 *          '500':
 *              description: Error del servidor
 */
 router.get('/random/:cantidad_productos', productController.getRandomLimited);

 /** 
 * @swagger
 * /api/productos/categoria/{categoria_id}:
 *   get:
 *      summary: Recupera productos segun categoria.
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
 *          200:
 *              description: Respuesta exitosa
 *              content:
 *                application/json:
 *                  schema:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schema/Producto' 
 *          404:
 *            description: No se encontro la categoria
 *            content:
 *              application/json:
 *                schema:
 *                  example: []                  
 *          500:
 *            description: Error del servidor
 */
  router.get('/categoria/:categoria_id', productController.getProductFromCategory);

module.exports = router;