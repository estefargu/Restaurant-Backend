const {Model, DataTypes} = require('sequelize');
const connection = require('../DataBase/connection');

class product extends Model{}

product.init({
    productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    productDescription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false // no permite nulos
    }
},{
    sequelize: connection,
    modelName: 'product',
    paranoid: true,
    deletedAt: 'destroyTime'
});

module.exports = product;