const connection = require('./connection'); // un punto para acceder al archivo

//Models
const restaurant = require('../Models/restaurant')
const product = require('../Models/product');

function sync(){
    restaurant.hasMany(product,{
        foreignKey: 'restaurantId', // Nuestra llave foranea
        onDelete: 'restrict', // Restringe los borrados fisicos
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId'
    })   
}

sync();