const database = require('../database/database');
const productDAO = require('./productDAO');
const clientDAO = require('./clientDAO')

class orderDAO {
    async addOrder(body, clientInfo) {

        const cliente = {
            nombre: clientInfo.name,
            email: clientInfo.email,
        }

        var response = await database('clientes').where('email', clientInfo.email).select('id as cliente_id');

        var cliente_id = null;
        if (response.length > 0)
            [{ cliente_id }] = response
        else
            [{ cliente_id }] = await database('clientes').returning('id as cliente_id').insert(cliente)

        const orders = await this.#completeOrders(body, cliente_id);
        return await database('pedidos').insert(orders).returning('id');
    }

    async #completeOrders(body, cliente_id) {
        const products = await this.#getProductsFromOrders(body);
        return await this.#zipOrders(body, products, cliente_id);
    }

    async #getProductsFromOrders(body) {
        const productsId = body.map((order) => order.producto_id);

        if (productsId.length == 0)
            throw new Error('(ERROR) Order is empty');

        return productDAO.getProductByMultipleId({ ids: productsId });
    }

    async #zipOrders(body, products, cliente_id) {
        const now = new Date();

        if (products.length != body.length)
            throw new Error('(ERROR) Multiple or non existant instances of a product in requested order');

        await this.#sortOrderByAscendingProductId(body);

        return body.map((order, i) => ({
            cliente_id: cliente_id,
            ...order,
            total: products[i].precioPorUnidad * order.cantidad,
            created_at: now,
        }));
    }

    async #sortOrderByAscendingProductId(body) {
        body.sort((a, b) => a.producto_id - b.producto_id);
    }

    async getClientOrders(clientInfo) {
        const cliente = database('clientes').where('email', clientInfo.email).as('cliente');

        const pedidos = await database('pedidos')
            .innerJoin(cliente, 'cliente.id', 'pedidos.cliente_id')
            .innerJoin('productos', 'productos.id', 'pedidos.producto_id')
            .select('pedidos.id', 'productos.nombre', 'pedidos.cantidad', 'pedidos.total', 'pedidos.created_at')
            .orderBy('pedidos.created_at', 'desc');

        return pedidos;
    }
}

module.exports = new orderDAO();