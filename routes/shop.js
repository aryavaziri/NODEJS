const express = require('express');

const router = express.Router()

const productController = require('../controllers/products')
const shopController = require('../controllers/shop')

router.get('/', shopController.getIndex)
router.get('/products-list', productController.getProducts)
router.get('/products/:productId', productController.getProductDetails)
router.get('/card', shopController.getCard)
router.post('/card', productController.addToCard)
router.get('/checkout', shopController.getCheckout)

module.exports = router