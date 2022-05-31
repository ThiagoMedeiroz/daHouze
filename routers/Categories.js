const express = require('express')
const categoriesController = require('../controllers/CategoriesController')
const router = express.Router()

router.get('/categories', categoriesController.categories)

module.exports = router
