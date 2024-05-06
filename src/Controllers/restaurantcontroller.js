require('express');
const restaurant = require('../Models/restaurant');

//create restaurant
async function createRestaurant(req, res){ // peticion y respuesta a esa peticion
    try{
        console.log("Datos: " + req.body.restaurantName + ", "
                              + req.body.restaurantNit + ", "
                              + req.body.restaurantAddress + ", "
                              + req.body.restaurantPhone + ", "
                              + req.body.cityId)
        await restaurant.create({
            restaurantName: req.body.restaurantName,
            restaurantNit: req.body.restaurantNit,
            restaurantAddress: req.body.restaurantAddress,
            restaurantPhone: req.body.restaurantPhone,
            cityId: req.body.cityId
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error=>{ // error en el servidor
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){ // tiene un error en el metodo
        console.log(e);
    } 
}

async function listRestaurant(req,res){
    try{
        await restaurant.findAll({
            attributes: [
                'restaurantId',
                'restaurantName',
                'restaurantNit',
                'restaurantAddress',
                'restaurantPhone',
                'cityId'
            ],
            order: ['restaurantName']
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function getRestaurant(req, res){
    try{
        await restaurant.findOne({
            where: {restaurantId : req.params.restaurantId},
            attributes: [
                'restaurantId',
                'restaurantName',
                'restaurantNit',
                'restaurantAddress',
                'restaurantPhone',
                'cityId'
            ],
            //Falta traer el departmentId
        }).then(function (data){
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function updateRestaurant(req,res){
    try{
        await restaurant.update({
            restaurantName: req.body.restaurantName,
            restaurantAddress: req.body.restaurantAddress,
            restaurantPhone: req.body.restaurantPhone,
            cityId: req.body.cityId
        },{
            where:{restaurantId: req.params.restaurantId}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function disableRestaurant(req,res){
    try{
        await restaurant.destroy({
            where:{restaurantId: req.params.restaurantId}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

async function enableRestaurant(req,res){
    try{
        await restaurant.restore({
            where: {restaurantId: req.params.restaurantId}
        }).then(function(data){
            return res.status(200).json({
                data:data
            });
        }).catch(error =>{
            return res.status(400).json({
                error:error
            });
        })
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    createRestaurant,
    listRestaurant,
    getRestaurant,
    updateRestaurant,
    disableRestaurant,
    enableRestaurant
}