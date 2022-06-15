/** 
 * @swagger
 * components:
 *  schema:
 *   Cliente:
 *    type: object
 *    required:
 *    - nombre
 *    - email
 *    properties:
 *     id:
 *      type: integer
 *      format: int64
 *     nombre:
 *      type: string
 *     email:
 *      type: string
 *      format: email
 *     created_at:
 *      type: string
 *      format: date-time
 *     updated_at:
 *      type: string
 *      format: date-time
 *     
 *    example:
 *     id: 1
 *     nombre: Betsy
 *     email: betsy@betsy.com
 *     created_at: 2022-01-01T00:00:00.000Z
 *     updated_at: 2022-01-01T00:00:00.000Z
 * 
 *   ClientePost:
 *      type: object
 *      required:
 *      - nombre
 *      - email
 *      properties:
 *       nombre:
 *        type: string
 *       email:
 *        type: string
 *        format: email
 *      example:
 *       nombre: Betsy
 *       email: betsy@betsy.com
 */ 