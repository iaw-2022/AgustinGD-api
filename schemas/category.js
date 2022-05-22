/** 
 * @swagger
 * components:
 *  schema:
 *    Categoria:
 *      type: object
 *      required:
 *      - nombre
 *      - descripcion
 *      - imagen_dir
 *      properties:
 *        id:
 *          type: integer
 *          format: int64
 *        nombre:
 *          type: integer
 *        descripcion:
 *          type: string
 *        imagen_dir:
 *          type: string
 *          format: https
 *        created_at:
 *          type: string
 *          format: date-time
 *        updated_at:
 *          type: string
 *          format: date-time
 *        
 *      example:
 *        id: 1
 *        nombre: Carnes
 *        descripcion: Tejido animal, principalmente muscular.
 *        imagen_dir: https://i.kym-cdn.com/entries/icons/mobile/000/040/151/glowup.jpg
 *        created_at: 2022-01-01T00:00:00.000Z
 *        updated_at: 2022-01-01T00:00:00.000Z
 * 
 */ 