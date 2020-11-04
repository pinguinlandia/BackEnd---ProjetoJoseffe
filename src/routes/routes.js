const express = require('express');
const clienteController = require ('../controllers/clienteController');
const produtoController = require('../controllers/produtoController');
const pedidoController = require('../controllers/pedidoController');

const router = express.Router();

router.post('/clientes', clienteController.Insert);
router.get('/clientes', clienteController.SelectAll);
router.get('/clientes/:cd_cliente', clienteController.SelectDetail);
router.put('/clientes/:cd_cliente', clienteController.Update);
router.delete('/clientes/:cd_cliente', clienteController.Delete);
router.post('/produtos', produtoController.Insert);
router.get('/produtos', produtoController.SelectAll);
router.get('/produtos/:cd_produto', produtoController.SelectDetail);
router.put('/produtos/:cd_produto', produtoController.Update);
router.delete('/produtos/:cd_produto', produtoController.Delete);
router.post('/pedidos', pedidoController.Insert);
router.get('/pedidos', pedidoController.SelectAll);
router.get('/pedidos/:cd_pedido', pedidoController.SelectDetail);
router.put('/pedidos/:cd_pedido', pedidoController.Update);
router.delete('/pedidos/:cd_pedido', pedidoController.Delete);

module.exports = router;