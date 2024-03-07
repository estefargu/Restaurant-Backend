const express = require('express');
const departmentcontroller = require('../Controllers/departmentcontroller');
const router = express.Router();

router.get('/listdepartment', departmentcontroller.listDepartment);

module.exports = router;