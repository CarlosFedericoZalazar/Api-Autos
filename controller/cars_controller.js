import { supabaseAdmin, supabaseAnon } from "../db/supabase.js";

// =============================================
// GET ALL CARS
// =============================================


export const GetCars = async (req, res) => {
  const { data, error } = await supabaseAnon
    .from('autos')
    .select('*');

  if (error) {
    console.error(error);
    return res.status(500).json({ message: "Error obteniendo autos", error });
  }

  res.json(data);
};

// =============================================
// GET CAR BY ID
// =============================================
export const GetCarById = async (req, res) => {
  const id = req.params.id;

  const { data, error } = await supabaseAnon
    .from('autos')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    return res.status(500).json({ message: "Error obteniendo auto", error });
  }

  res.json(data);
};

// =============================================
// GET BY MARCA (Y MOTOR OPCIONAL)
// =============================================
export const GetCarByMarca = async (req, res) => {
  const marca = req.params.marca;
  const motor = req.params.motor;

  let query = supabaseAnon.from('autos').select('*').eq('marca', marca);

  if (motor) {
    query = query.eq('motor', motor);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    return res.status(500).json({ message: "Error obteniendo autos por marca", error });
  }

  if (data.length === 0) {
    return res.status(404).json({ message: "No se encontraron autos para la marca y motor especificados." });
  }

  res.json(data);
};

// =============================================
// CREATE CAR (PROTEGIDO CON x-api-key)
// =============================================
export const CreateCar = async (req, res) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.PRIVATE_API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { marca, modelo, motor, año, imagen } = req.body;

  const { data, error } = await supabaseAdmin
    .from('autos')
    .insert([{ marca, modelo, motor, año, imagen }])
    .select()
    .single();

  if (error) {
    console.error(error);
    return res.status(500).json({ message: "Error creando auto", error });
  }

  return res.status(201).json({ message: "Auto creado exitosamente", auto: data });
};

// =============================================
// UPDATE CAR
// =============================================
export const UpdateCar = async (req, res) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.PRIVATE_API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const id = req.params.id;
  const { marca, modelo, motor, año, imagen } = req.body;

  const { data, error } = await supabaseAdmin
    .from('autos')
    .update({ marca, modelo, motor, año, imagen })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error(error);
    return res.status(500).json({ message: "Error actualizando auto", error });
  }

  res.json({ message: "Auto actualizado", auto: data });
};

// =============================================
// DELETE CAR
// =============================================
export const DeleteCar = async (req, res) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.PRIVATE_API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const id = req.params.id;

  const { data, error } = await supabaseAdmin
    .from('autos')
    .delete()
    .eq('id', id);

  if (error) {
    console.error(error);
    return res.status(500).json({ message: "Error eliminando auto", error });
  }

  res.json({ message: "Auto eliminado exitosamente", auto: data });
};
