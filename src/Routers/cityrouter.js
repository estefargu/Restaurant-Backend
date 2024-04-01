const express = require('express');
const citycontroller = require('../Controllers/citycontroller');
const router = express.Router();

router.get('/listcities', citycontroller.listCities);

module.exports = router;