// Define que estamos utilizando o sequelize
const {DataTypes} = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');



const login = sequelize.define('tb_login', {

    cd_login: {
        allowNull: false,       
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nm_login: {
        type: DataTypes.STRING(50),    
    },
    nm_senha: {
        type: DataTypes.STRING(20), 
    },
    fk_cd_cliente:{
        type: DataTypes.INTEGER,
        allowNull: false,
    references: {
            model: tb_clientes,
            key: 'cd_cliente',            
    }

    }    
});

module.exports = login;