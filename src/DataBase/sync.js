const connection = require('./connection'); // un punto para acceder al archivo

//Models
const restaurant = require('../Models/restaurant') // dos puntos para salir de la carpeta
const product = require('../Models/product');
const department = require('../Models/department');
const city = require('../Models/city');

//JSON
const departmentjson = require('./jsonfiles/departmentjson');
const cityjson = require('./jsonfiles/cityjson');

async function sync(){ // el async (funcion asincrona) es para darle prioridad al sync, el async siempre va con await

    // Foreing Key restaurant - product
    restaurant.hasMany(product,{
        foreignKey: 'restaurantId', // Nuestra llave foranea
        onDelete: 'restrict', // Restringe los borrados fisicos
        onUpdate: 'cascade'
    });
    product.belongsTo(restaurant,{
        foreignKey: 'restaurantId'
    })
    
    //Foreing Key department - city
    department.hasMany(city,{
        foreignKey: 'departmentId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    city.belongsTo(department,{
        foreignKey: 'departmentId'
    })

    //Foreing Key city - restaurant
    city.hasMany(restaurant,{
        foreignKey: 'cityId',
        onDelete: 'restrict',
        onUpdate: 'cascade'
    });
    restaurant.belongsTo(city,{
        foreignKey: 'cityId'
    });

    await connection.sync({force: false}) // metodo que sincroniza la base de datos
    .then(() => { 
        console.log('Base de datos sincronizada');
    })  
    .catch((error) =>{
        console.error('Error syncing DataBase' + error);
    });

    //create JSON
    departmentjson.createDepartments();
    cityjson.createCities(); 
}

sync();