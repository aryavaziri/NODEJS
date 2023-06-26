const express = require('express');
const router = express.Router();

const productController = require('../controllers/products')

router.get('/products', productController.getProductsAdmin)
router.get('/edit-product/:productId', productController.getEditProduct)
router.post('/edit-product', productController.updateProduct)
router.get('/edit-product', productController.getAddProduct)
router.post('/add-product', productController.updateProduct)
router.post('/delete', productController.deleteProduct)

module.exports.router = router