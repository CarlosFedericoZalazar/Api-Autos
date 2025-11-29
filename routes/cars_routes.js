const carsController = require('../controller/cars_controller');
const express = require('express');
const router = express.Router();

router.get('/', carsController.GetCars);

router.get('/:marca', carsController.GetCarByMarca);

router.get("/:marca/:motor", carsController.GetCarByMarca);

module.exports = router;