const express = require('express');
const productosRouter = require('./productos/productoRoutes');

const router = express.Router();

router.use('/productos', productosRouter);

module.exports = router;