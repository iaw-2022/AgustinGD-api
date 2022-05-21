const express = require('express');
const productsRouter = require('./products/productRoutes');
const categoriesRouter = require('./categories/categoryRoutes');
const clientsRouter = require('./clients/clientRoutes');

const router = express.Router();

router.use('/productos', productsRouter);
router.use('/categorias', categoriesRouter);
router.use('/clientes', clientsRouter);

module.exports = router;