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
 *                      $ref: '#/components/schemas/Categoria'
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
 *                      $ref: '#/components/schemas/Categoria'
 *          '500':
 *              description: Error del servidor
 */
router.get('/random/:cantidad_categorias', categoryController.getRandomLimited);

/** 
 * @swagger
 * /api/categorias/{nombre}:
 *   get:
 *      summary: Recupera una categoria segun nombre.
 *      description: Recupera una categoria segun el nombre (Case insensitive).
 *      tags: 
 *          - Categorias 
 *      parameters:
 *          - in: path
 *            name: nombre
 *            schema:
 *              type: string
 *            required: true
 *            description: nombre de la categoria
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
 *              content:
 *                application/json:
 *                  schema:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Categoria'
 *          '500':
 *              description: Error del servidor
 */
 router.get('/:nombre', categoryController.getByName);

module.exports = router;