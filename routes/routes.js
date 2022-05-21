const express = require('express');
const productsRouter = require('./products/productRoutes');
const categoriesRouter = require('./categories/categoryRoutes');

const router = express.Router();

router.use('/productos', productsRouter);
router.use('/categorias', categoriesRouter);

module.exports = router;