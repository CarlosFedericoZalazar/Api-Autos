import express from 'express';
import { GetCars, GetCarById, CreateCar, DeleteCar, GetCarByMarca, UpdateCar } from '../controller/cars_controller.js';
import {middlewareCars} from '../middleware/middleware_cars.js';

const router = express.Router();

router.get('/', GetCars);
router.get('/id/:id', GetCarById);
router.get('/marca/:marca', GetCarByMarca);
router.get('/marca/:marca/:motor', GetCarByMarca);

router.post('/', middlewareCars, CreateCar);
router.put('/:id', UpdateCar);
router.delete('/:id', DeleteCar);

export default router;
