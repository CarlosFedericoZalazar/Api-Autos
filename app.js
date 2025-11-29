const express = require('express');
import cors from "cors";
const app = express();

const carsRoutes = require('./routes/cars_routes');

app.use(cors());
app.use('/cars', carsRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
