const database = require('../database/database');
const productDAO = require('./productDAO');

class orderDAO {
    async addOrder(body) {
        const orders = await this.#completeOrders(body);
        return await database('pedidos').insert(orders).returning('id');
    }

    async #completeOrders(body) {
        const products = await this.#getProductsFromOrders(body);
        return await this.#addTotalAndCurrentDateToOrders(body, products);
    }

    async #getProductsFromOrders(body) {
        const productsId = body.map((order) => order.producto_id);

        return productDAO.getProductByMultipleId({ ids: productsId });
    }

    async #addTotalAndCurrentDateToOrders(body, products) {
        const now = new Date();

        if (products.length != body.length)
            throw new Error('(ERROR) Multiple or non existant instances of a product in requested order');

        await this.#sortOrderByAscendingProductId(body);

        return body.map((order, i) => ({
            ...order,
            total: products[i].precioPorUnidad * order.cantidad,
            created_at: now
        }));
    }

    async #sortOrderByAscendingProductId(body) {
        body.sort((a, b) => a.producto_id - b.producto_id);
    }
}

module.exports = new orderDAO();