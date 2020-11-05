// Define que estamos utilizando o sequelize
const {DataTypes} = require('sequelize');

const produto = require('./produto');
const cliente = require('./cliente');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');

const pedido = sequelize.define('tb_pedido', {

    cd_pedido: {
        allowNull: false,        
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },    
    qt_produto: {
        
        type: DataTypes.INTEGER,
    },
    fk_cd_cliente: {
        
        type: DataTypes.INTEGER,
        references:{
            model: 'tb_clientes',
            key: 'cd_cliente'
        }
    },
    fk_cd_produto: {
        type: DataTypes.INTEGER,
        references:{
            model: 'tb_produtos',
            key: 'cd_produto'
        }
    }    
    
});

module.exports = pedido;