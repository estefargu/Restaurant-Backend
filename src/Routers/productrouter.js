const express = require('express');
const productcontroller = require('../Controllers/productcontroller');
const restaurantcontroller = require('../Controllers/restaurantcontroller');
const router = express.Router();

router.post('/createproduct', productcontroller.createProduct);
router.get('/listproduct/:restaurantId', productcontroller.listProduct);

module.exports = router;