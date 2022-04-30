const express = require('express');
const productoController = require('../../controller/productoController');

const router = express.Router();

router.get('/', productoController.getAll);

module.exports = router;