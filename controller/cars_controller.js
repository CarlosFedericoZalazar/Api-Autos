import { autos } from "../data/autos.js";
import { supabase } from "../db/supabase.js";

export const GetCars = async (req, res) => {
  const { data, error } = await supabase
  .from('autos')   // tu tabla en Supabase
    .select('*');    // selecciona todas las columnas
    
  if (error) {
    console.error(error);
    return res.status(500).json({ message: "Error obteniendo autos", error });
  }

  res.json(data);
};































// export const GetCars = (req, res) => {
//   res.send(autos);
// }


export const GetCarByMarca = (req, res) => {
  const marca = (req.params.marca || "").toLowerCase();
  const motor = (req.params.motor || "").toLowerCase();

  const encontrados = [];
  autos.forEach(a => {
    if (a.marca && a.marca.toLowerCase() === marca) encontrados.push(a);
  });
  if (motor) {
    let filterMotor = [];
    encontrados.forEach(a => {
      if (a.motor && a.motor.toLowerCase() === motor) filterMotor.push(a);
    })
    if (filterMotor.length) return res.send(filterMotor);
    return res.status(404).send({ message: "No se encontraron autos con esa marca y motor." });
  }
  if (encontrados.length) return res.send(encontrados);
  return res.status(404).send({ message: "No se encontraron autos para la marca." });
}
