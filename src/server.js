require('./DataBase/sync.js');

const connection = require('./DataBase/connection.js');
const express = require ('express');
const app = express();
const port = process.env.PORT || 1337;

//routers
const restaurantrouter = require('./Routers/restaurantrouter.js');

app.use(express.json()); // va a recibir archivos JSON
app.use(express.urlencoded({ extended: false }));

connection.sync({force: false}) // metodo que sincroniza la base de datos
    .then(() => { 
        console.log('Base de datos sincronizada');
        app.listen(port, function() { // NOS VA A ESCUCHAR POR EL PUERTO QUE LE DEFINIMOS
            console.log('The application is running on port' + port);
        })
    })  
    .catch((error) =>{
        console.error('Error syncing DataBase' + error);
    });
    
//api
app.use('/api', restaurantrouter);

