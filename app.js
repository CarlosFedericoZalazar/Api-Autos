import express from 'express';
import cors from "cors";
import carsRoutes from './routes/cars_routes.js';

const app = express();

// 👇👇 ESTO SIEMPRE VA ANTES DE LAS RUTAS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// 👇 tus rutas recién acá
app.use('/cars', carsRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
