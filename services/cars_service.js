import { supabaseAnon } from "../db/supabase.js";

export async function getCarsService() {
  const { data, error } = await supabaseAnon
    .from("autos")
    .select("*");

  if (error) throw error;
  return data;
}

export async function getCarByIdService(id) {
  const { data, error } = await supabaseAnon
    .from("autos")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function getCarsByMarcaService(marca, motor) {
  let query = supabaseAnon
    .from("autos")
    .select("*")
    .eq("marca", marca);

  if (motor) {
    query = query.eq("motor", motor);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function createCarService(car) {
  const { data, error } = await supabaseAnon
    .from("autos")
    .insert([car])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateCarService(id, car) {
  const { data, error } = await supabaseAnon
    .from("autos")
    .update(car)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteCarService(id) {
  const { data, error } = await supabaseAnon
    .from("autos")
    .delete()
    .eq("id", id);

  if (error) throw error;
  return data;
}
