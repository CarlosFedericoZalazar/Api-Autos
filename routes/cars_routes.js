const carsController = require('../controller/cars_controller');
const express = require('express');
const router = express.Router();

router.get('/', carsController.GetCars);

module.exports = router;