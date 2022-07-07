const express = require('express')
const FinalizacaoController = require('../controllers/FinalizacaoController')
const router = express.Router()

router.get('/finalizacao', FinalizacaoController.finalizacao)
 
module.exports = router