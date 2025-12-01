import 'dotenv/config';
import { supabase } from "./db/supabase.js";

async function testConnection() {
  const { data, error } = await supabase
    .from("autos")
    .select("*")
    .limit(1);

  if (error) {
    console.error("❌ Error al consultar la tabla:", error);
    return;
  }

  console.log("🔥 Conexión exitosa y tabla encontrada.");
  console.log("Primer registro:", data);
}

testConnection();
