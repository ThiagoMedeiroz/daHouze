const express = require('express')
const productController = require('../controllers/ProductController')
const router = express.Router()

router.get('/product', productController.product)

module.exports = router
