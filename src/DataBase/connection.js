const {Sequelize} = require('sequelize');

var dataBase = 'restaurantDB'
var userName = 'postgres'; // usuario postgres
var password = 'ab001133'; // contrasena postgres

const connection = new Sequelize(dataBase,userName,password,{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;