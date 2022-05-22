/** 
 * @swagger
 * components:
 *  schema:
 *   Pedido:
 *    type: object
 *    required:
 *    - cliente_id
 *    - producto_id
 *    - cantidad
 *    properties:
 *     id:
 *      type: integer
 *      format: int64
 *     cliente_id:
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
 *     cliente_id: 1
 *     producto_id: 1
 *     cantidad: 1
 *     total: 11.11
 *     created_at: 2022-01-01T00:00:00.000Z
 *     updated_at: 2022-01-01T00:00:00.000Z
 * 
 *   PedidoPost:
 *    type: object
 *    required:
 *    - cliente_id
 *    - producto_id
 *    - cantidad
 *    properties:
 *     cliente_id:
 *      type: integer
 *      format: int64
 *     producto_id:
 *      type: integer
 *      format: int64
 *     cantidad:
 *      type: integer
 *     
 *    example:
 *     cliente_id: 1
 *     producto_id: 1
 *     cantidad: 1
 * 
 *   PedidoPost2:     
 *     example:
 *       cliente_id: 1
 *       producto_id: 2
 *       cantidad: 2
 */ 