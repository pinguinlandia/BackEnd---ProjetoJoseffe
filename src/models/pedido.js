// Define que estamos utilizando o sequelize
const {DataTypes} = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');



const pedido = sequelize.define('tb_pedido', {

    cd_pedido: {
        allowNull: false,        
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nm_cliente: {
        type: DataTypes.STRING,    
    },
    nm_produto: {
        type: DataTypes.STRING,    
    },
    qt_produto: {
        type: DataTypes.INTEGER,
    },
    fk_cd_cliente: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
            model: 'tb_clientes',
            key: 'cd_cliente'
        }
    },
    fk_cd_produto: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references:{
            model: 'tb_produtos',
            key: 'cd_produto'
        }
    }    
    
});

module.exports = pedido;