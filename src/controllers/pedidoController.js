const produto = require('../models/produto');
const cliente = require('../models/cliente');
const pedido = require('../models/pedido');
const status = require('http-status');


// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
        
        const fk_cd_cliente = req.body.fk_cd_cliente;
        const fk_cd_produto = req.body.fk_cd_produto;
        const qt_produto = req.body.qt_produto;         
        const nm_cliente = cliente.findByPk(fk_cd_cliente);
        const nm_produto = produto.findByPk(fk_cd_produto);        

        pedido.create({ 

            fk_cd_cliente: fk_cd_cliente,
             
            qt_produto: qt_produto,  
            nm_cliente: nm_cliente.nm_cliente,
            nm_produto: nm_produto.nm_produto,            
        })

        
        //then = registra o que queremos que aconteca quando a Promise for resolvida

        .then(pedido => {
                if (pedido) {
                        res.status(status.OK).send(pedido.nm_cliente);
                } else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        
        //catch = registra o que queremos que aconteca quando a Promise falhar

        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
        
        pedido.findAll()        
        .then(pedido => {
            if (pedido) {
                res.status(status.OK).send(pedido);
            }
            })
            .catch(error => next(error));      
}

exports.SelectDetail = (req, res, next) => {
        const cd_pedido = req.params.cd_pedido;
        
        pedido.findByPk(cd_pedido)
        
        .then(pedido => {
                if (pedido) {
                       res.status(status.OK).send(pedido);
                } else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
        const cd_pedido = req.params.cd_pedido;
        const nm_cliente = req.body.nm_cliente;
        const nm_produto = req.body.nm_produto;
        const fk_cd_cliente = req.body.fk_cd_cliente;
        const fk_cd_produto = req.body.fk_cd_produto;      
        
        pedido.findByPk(cd_pedido)
        
        .then(pedido => {
                if (pedido) {
                        pedido.update({
                                nm_cliente: nm_cliente,
                                nm_produto: nm_produto,
                                fk_cd_cliente: fk_cd_cliente,  
                                fk_cd_produto: fk_cd_produto,                              
                        },                        
                        {
                                where: { cd_pedido: cd_pedido }
                        })

                        produto.update({
                            nm_produto: nm_produto,
                            cd_produto: fk_cd_produto,
                        },
                        {
                            where: { cd_produto: fk_cd_produto}
                        })

                        cliente.update({
                            cd_cliente: fk_cd_cliente,
                            nm_cliente: nm_cliente,
                        },
                        {
                            where: {cd_cliente: fk_cd_cliente}
                        })

                        .then(() => {
                                res.status(status.OK).send();
                        })
                        .catch(error => next(error));
                } else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
        const cd_pedido = req.params.cd_pedido;
        pedido.findByPk(cd_pedido)
        .then(pedido => {
                if (pedido) {
                        pedido.destroy({
                                where: { cd_pedido: cd_pedido }
                        })
                        .then(() => {
                                res.status(status.OK).send();
                        })
                        .catch(error => next(error));
                }
                else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        .catch(error => next(error));

};