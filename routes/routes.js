const express = require('express');
const productsRouter = require('./products/productRoutes');

const router = express.Router();

router.use('/productos', productsRouter);

module.exports = router;