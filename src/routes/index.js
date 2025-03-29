const express = require('express');
const paymentController = require('../controllers/paymentController');
const cursosController = require('../controllers/cursosController');
const router = express.Router();
// const configDotenv = require('dotenv');

// ## Pagamentos
router.get('/', paymentController.verificarPagamento)
router.post('/api/pagar', paymentController.realizarPagamento)
router.put('/', paymentController.continuidadePagamento)

// ## Cursos
router.post('/api/cursos/adicionar', cursosController.adicionar)
router.delete('/api/cursos/deletar/:id', cursosController.deletar)

module.exports = router