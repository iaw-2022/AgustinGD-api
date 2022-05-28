/** 
 * @swagger
 * components:
 *  schemas:
 *    Producto:
 *      type: object
 *      required:
 *      - categoria_id
 *      - disponible
 *      - nombre
 *      - descripcion
 *      - precioPorUnidad
 *      - imagen_dir
 *      properties:
 *        id:
 *          type: integer
 *          format: int64
 *        categoria_id:
 *          type: integer
 *          format: int64
 *        disponible:
 *          type: boolean
 *        nombre:
 *          type: integer
 *        descripcion:
 *          type: string
 *        precioPorUnidad:
 *          type: number
 *          format: float
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
 *        categoria_id: 1
 *        disponible: true
 *        nombre: Carne de chancho
 *        descripcion: De los creadores de Oink Oink ^(*(oo)*)^
 *        precioPorUnidad: 11.11
 *        imagen_dir: https://www.pngfind.com/pngs/m/121-1215193_imprimibles-para-fiestas-gratis-e-imgenes-olivia-the.png
 *        created_at: 2022-01-01T00:00:00.000Z
 *        updated_at: 2022-01-01T00:00:00.000Z
 * 
 */ 