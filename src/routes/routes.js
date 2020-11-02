const express = require('express');
const clienteController = require ('../controllers/clienteController');
const router = express.Router();

router.post('/clientes', clienteController.Insert);
router.get('/clientes', clienteController.SelectAll);
router.get('/clientes/:cd_cliente', clienteController.SelectDetail);
router.put('/clientes/:cd_cliente', clienteController.Update);
router.delete('/clientes/:cd_cliente', clienteController.Delete);

module.exports = router;