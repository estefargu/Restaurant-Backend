require('./DataBase/sync.js');

const connection = require('./DataBase/connection.js');
const express = require ('express');
const app = express();
const port = process.env.PORT || 1337;

//routers
const restaurantrouter = require('./Routers/restaurantrouter.js');
const productrouter = require('./Routers/productrouter.js');
const departmentrouter = require('./Routers/departmentrouter.js');
const cityrouter = require('./Routers/cityrouter.js')

app.use(express.json()); // va a recibir archivos JSON
app.use(express.urlencoded({ extended: false }));

app.listen(port, function() { // NOS VA A ESCUCHAR POR EL PUERTO QUE LE DEFINIMOS
    console.log('The application is running on port' + port);
});
    
//api
app.use('/api', restaurantrouter);
app.use('/api', productrouter);
app.use('/api', departmentrouter);
app.use('/api', cityrouter);