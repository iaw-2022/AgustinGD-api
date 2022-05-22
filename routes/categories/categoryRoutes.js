const express = require('express');
const categoryController = require('../../controller/categoryController');

const router = express.Router();

/** 
 * @swagger
 * /api/categorias:
 *  get:
 *      summary: Recupera todas las categorias.
 *      description: Recupera todas las categorias. 
 *      tags: 
 *       - Categorias
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
 *              content:
 *                application/json:
 *                  schema:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schema/Categoria'
 *          '500':
 *              description: Error del servidor
*/
router.get('/', categoryController.getAll);

/** 
 * @swagger
 * /api/categorias/random/{cantidad_categorias}:
 *   get:
 *      summary: Recupera categorias al azar.
 *      description: Recupera X de todas las categorias al azar.
 *      tags: 
 *          - Categorias 
 *      parameters:
 *          - in: path
 *            name: cantidad_categorias
 *            schema:
 *              type: integer
 *            required: true
 *            description: cantidad de categorias random 
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
 *              content:
 *                application/json:
 *                  schema:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schema/Categoria'
 *          '500':
 *              description: Error del servidor
 */
router.get('/random/:cantidad_categorias', categoryController.getRandomLimited);

module.exports = router;