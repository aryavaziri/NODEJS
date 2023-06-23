const express = require('express');
const router = express.Router();

const productController = require('../controllers/products')

router.get('/add-products', productController.getAddProduct)

router.post('/add-products', productController.postAddProduct)

module.exports.router = router