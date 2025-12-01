import express from 'express';
import { GetCars, GetCarById, CreateCar, DeleteCar, GetCarByMarca, UpdateCar } from '../controller/cars_controller.js';

const router = express.Router();

router.get('/', GetCars);
router.get('/:id', GetCarById);
router.get('/:marca', GetCarByMarca);
router.get('/:marca/:motor', GetCarByMarca);

router.post('/', CreateCar);
router.put('/:id', UpdateCar);
router.delete('/:id', DeleteCar);

export default router;
