// Define que estamos utilizando o sequelize
const {DataTypes} = require('sequelize');
const Sequelize = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');



const cliente = sequelize.define('tb_cliente', {

    cd_cliente: {
        allowNull: false,        
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nm_cliente: {
        type: DataTypes.STRING(100),    
    },
    cd_cpf: {
        type: DataTypes.INTEGER(13),    
    },
    cd_rg: {
        type: DataTypes.INTEGER(10),
    },
    nm_login: {
        type: DataTypes.STRING(50),
    },
    nm_senha: {
        type: DataTypes.STRING(20),
    }
    
});


module.exports = cliente;






