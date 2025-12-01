import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import carsRoutes from './routes/cars_routes.js';

const app = express();

app.use(cors());
app.use('/cars', carsRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
