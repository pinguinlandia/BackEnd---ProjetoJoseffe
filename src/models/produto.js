// Define que estamos utilizando o sequelize
const {DataTypes} = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');



const produto = sequelize.define('tb_produto', {

    cd_produto: {
        allowNull: false,        
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nm_produto: {
        type: DataTypes.STRING(45),    
    },
    vl_preco_produto: {
        type: DataTypes.FLOAT, 
    }    
});

module.exports = produto;