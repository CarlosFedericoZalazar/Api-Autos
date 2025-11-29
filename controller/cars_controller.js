import { autos } from "../data/autos.js";

export const GetCars = (req, res) => {
  res.send(autos);
}

