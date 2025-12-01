import express from 'express';
import { GetCars, GetCarByMarca } from '../controller/cars_controller.js';

const router = express.Router();

router.get('/', GetCars);
router.get('/:marca', GetCarByMarca);
router.get('/:marca/:motor', GetCarByMarca);

export default router;
