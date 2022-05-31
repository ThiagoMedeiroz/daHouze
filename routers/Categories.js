const express = require('express')
const categoriesController = require('../controllers/CategoriesController')
const router = express.Router()

router.get('/', categoriesController.categories)

module.exports = router
