const express = require('express');
const citycontroller = require('../Controllers/citycontroller');
const router = express.Router();

router.get('/listcity', citycontroller.listCity);

module.exports = router;