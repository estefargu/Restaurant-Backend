'use strict';
const connection = require('./DataBase/connection.js');
var express = require ('express');
var app = express();

app.use(express.json()); // va a recibir archivos JSON
app.use(express.urlencoded({ extended: false }));

var port = process.env.PORT || 1337;

connection.sync({force: false}) // metodo que sincroniza la base de datos
    .then(() => { 
        console.log('Base de datos sincronizada');
        app.listen(port, function() { // NOS VA A ESCUCHAR POR EL PUERTO QUE LE DEFINIMOS
            console.log('The application is running on port' + port);
        })
    })  
    .catch((error) =>{
        console.error('Error al sincronizar la base de datos', error);

    });  

