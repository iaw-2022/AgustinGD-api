/** 
 * @swagger
 * components:
 *  schema:
 *   Pedido:
 *    type: object
 *    required:
 *    - producto_id
 *    - cantidad
 *    properties:
 *     id:
 *      type: integer
 *      format: int64
 *     producto_id:
 *      type: integer
 *      format: int64
 *     cantidad:
 *      type: integer
 *     total:
 *      type: number
 *      format: float
 *     created_at:
 *      type: string
 *      format: date-time
 *     updated_at:
 *      type: string
 *      format: date-time
 *     
 *    example:
 *     id: 1
 *     producto_id: 1
 *     cantidad: 1
 *     total: 11.11
 *     created_at: 2022-01-01T00:00:00.000Z
 *     updated_at: 2022-01-01T00:00:00.000Z
 * 
 *   PedidoPost:
 *    type: object
 *    required:
 *    - producto_id
 *    - cantidad
 *    properties:
 *     producto_id:
 *      type: integer
 *      format: int64
 *     cantidad:
 *      type: integer
 *     
 *    example:
 *     producto_id: 1
 *     cantidad: 1
 * 
 *   PedidoPost2:     
 *     example:
 *       producto_id: 2
 *       cantidad: 2
 */ 