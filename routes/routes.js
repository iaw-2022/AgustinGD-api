const express = require('express');
const productsRouter = require('./products/productRoutes');
const categoriesRouter = require('./categories/categoryRoutes');
const clientsRouter = require('./clients/clientRoutes');
const ordersRouter = require('./orders/orderRoutes');

const router = express.Router();

router.use('/productos', productsRouter);
router.use('/categorias', categoriesRouter);
router.use('/clientes', clientsRouter);
router.use('/pedidos', ordersRouter);

module.exports = router;