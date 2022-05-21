const express = require('express');
const categoryController = require('../../controller/categoryController');

const router = express.Router();

/** 
 * @swagger
 * /api/categorias:
 *  get:
 *      description: Recupera todas las categorias. 
 *      tags: 
 *       - Categorias
 *      responses:
 *          '200':
 *              description: Respuesta exitosa
 *          '500':
 *              description: Error del servidor
*/
router.get('/', categoryController.getAll);

module.exports = router;