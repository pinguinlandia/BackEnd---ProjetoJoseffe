const express = require('express');
const clienteController = require ('../controllers/clienteController');
const produtoController = require('../controllers/produtoController');

const router = express.Router();

router.post('/clientes', clienteController.Insert);
router.get('/clientes', clienteController.SelectAll);
router.get('/clientes/:cd_cliente', clienteController.SelectDetail);
router.put('/clientes/:cd_cliente', clienteController.Update);
router.delete('/clientes/:cd_cliente', clienteController.Delete);
router.post('/produtos', produtoController.Insert);
router.get('/produtos', produtoController.SelectAll);
router.get('/produtos/:cd_produto', produtoController.SelectDetail)
router.put('/produtos/:cd_produto', produtoController.Update);
router.delete('/produtos/:cd_produto', produtoController.Delete);

module.exports = router;