const produto = require('../models/produto');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
        
        const nm_produto = req.body.nm_produto;
        const vl_preco_produto = req.body.vl_preco_produto;
        
        produto.create({                
            nm_produto: nm_produto,
            vl_preco_produto: vl_preco_produto,
        })
        //then = registra o que queremos que aconteca quando a Promise for resolvida

        .then(produto => {
                if (produto) {
                        res.status(status.OK).send(produto);
                } else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        
        //catch = registra o que queremos que aconteca quando a Promise falhar

        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
        
    produto.findAll()        
            .then(produto => {
                    if (produto) {
                           res.status(status.OK).send(produto);
                    }
            })
            .catch(error => next(error));      
}

exports.SelectDetail = (req, res, next) => {
    const cd_produto = req.params.cd_produto;
    
    produto.findByPk(cd_produto)
    
    .then(produto => {
            if (produto) {
                   res.status(status.OK).send(produto);
            } else {
                    res.status(status.NOT_FOUND).send();
            }
    })
    .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const cd_produto = req.params.cd_produto;
    const nm_produto = req.body.nm_produto;
    const vl_preco_produto = req.body.vl_preco_produto;    
    
    produto.findByPk(cd_produto)
    .then(cliente => {
            if (cliente) {
                    cliente.update({
                        nm_produto: nm_produto,
                        vl_preco_produto: vl_preco_produto
                    },
                    {
                            where: { cd_produto: cd_produto}
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
    const cd_produto = req.params.cd_produto;
    
    produto.findByPk(cd_produto)
    .then(produto => {
            if (produto) {
                    produto.destroy({
                            where: { cd_produto: cd_produto }
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