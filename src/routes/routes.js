const router = require('express').Router()

const ProductController = require('../controllers/products')

// VERBOS HTTP (4 TIPOS)
// GET - OBTER DADOS 
// POST - ENVIAR DADOS / receber (ponto de vista servidor)
// PUT - ATUALIZAR DADOS
// DELETE - REMOVER DADOS

router.get('/products', ProductController.get)
// router.post('/products', ProductController.post)
// router.put('/products:/id', ProductController.put)
// router.delete('/products/:id', ProductController.delete)

module.exports = router