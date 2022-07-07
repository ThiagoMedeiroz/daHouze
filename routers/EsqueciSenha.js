const express = require('express')
const SenhaController = require('../controllers/SenhaController')
const router = express.Router()

router.get('/esqueciSenha', SenhaController.senha)

module.exports = router