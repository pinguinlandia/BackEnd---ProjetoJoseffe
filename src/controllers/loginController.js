const login = require('../models/login');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
        
        const nm_login = req.body.nm_login;
        const nm_senha = req.body.nm_senha;
        
        login.create({
                nm_login: nm_login,
                nm_senha: nm_senha,
        })
        //then = registra o que queremos que aconteca quando a Promise for resolvida

        .then(login => {
                if (login) {
                        res.status(status.OK).send(login);
                } else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        
        //catch = registra o que queremos que aconteca quando a Promise falhar

        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
        
        login.findAll()        
                .then(login => {
                        if (login) {
                               res.status(status.OK).send(login);
                        }
                })
                .catch(error => next(error));      
}

exports.SelectDetail = (req, res, next) => {
        const fk_cd_cliente = req.params.fk_cd_cliente;
        
        login.findOne(fk_cd_cliente)
        
        .then(login => {
                if (login) {
                       res.status(status.OK).send(login);
                } else {
                        res.status(status.NOT_FOUND).send();
                }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
        const fk_cd_cliente = req.params.fk_cd_cliente;
        const nm_login = req.body.nm_login;
        const nm_senha = req.body.nm_senha;
        
        cliente.findOne(fk_cd_cliente)
        .then(cliente => {
                if (cliente) {
                        cliente.update({
                                nm_cliente: nm_cliente,
                                cd_cpf: cd_cpf,
                                cd_rg: cd_rg,
                                nm_login: nm_login,
                                nm_senha: nm_senha
                        },
                        {
                                where: { cd_cliente: cd_cliente }
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
        const cd_cliente = req.params.cd_cliente;
        cliente.findByPk(cd_cliente)
        .then(cliente => {
                if (cliente) {
                        cliente.destroy({
                                where: { cd_cliente: cd_cliente }
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