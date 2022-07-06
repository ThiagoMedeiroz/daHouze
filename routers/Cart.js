const express = require('express')
const cartController = require('../controllers/CartController')
const router = express.Router()

router.get('/cart', cartController.cart)

module.exports = router
