import express from 'express';
import { getCars, getCarById, createCar, deleteCar, getCarsByMarca, updateCar } from '../controllers/cars_controller.js';
import {middlewareCars} from '../middlewares/middleware_cars.js';

const router = express.Router();

router.get('/', getCars);
router.get('/id/:id', getCarById);
router.get('/marca/:marca', getCarsByMarca);
router.get('/marca/:marca/:motor', getCarsByMarca);

router.post('/', middlewareCars, createCar);
router.put('/:id', updateCar);
router.delete('/:id', deleteCar);

export default router;
