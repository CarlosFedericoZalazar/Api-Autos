# 🚗 API Autos

API desarrollada a modo de práctica. Permite obtener, filtrar y crear autos utilizando una base de datos real alojada en **Supabase**.  
Inicialmente la API consumía un archivo local (`data/autos.json`), pero actualmente opera íntegramente mediante consultas a la base de datos.

---

## 🛠️ Tecnologías utilizadas

- **Express** – Framework para el servidor.
- **Supabase** – Base de datos y servicio de autenticación.
- **CORS** – Permite solicitudes desde otros orígenes.
- **Dotenv** – Manejo de variables de entorno.
- **Nodemon** – Recarga automática en desarrollo.

---

# 🚗 API Autos

API desarrollada a modo de práctica. Permite obtener, filtrar y crear autos utilizando una base de datos real alojada en **Supabase**.  
Inicialmente la API consumía un archivo local (`data/autos.json`), pero actualmente opera íntegramente mediante consultas a la base de datos.

---

## 🛠️ Tecnologías utilizadas

- **Express** – Framework para el servidor.
- **Supabase** – Base de datos y servicio de autenticación.
- **CORS** – Permite solicitudes desde otros orígenes.
- **Dotenv** – Manejo de variables de entorno.
- **Nodemon** – Recarga automática en desarrollo.

---

## 📦 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/CarlosFedericoZalazar/Api-Autos.git

2. Instalar dependencias:
   ```bash
   npm install
   ````
3. Crear archivo .env en la raíz del proyecto:
   ```env
   SUPABASE_URL=tu_supabase_url
   SUPABASE_KEY=tu_supabase_key
   ```
4. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   

## 🌐 URL Base (Deploy en Vercel)
--- https://api-autos-three.vercel.app/ `(IMPORANTE: Cargar la variable de entorno para la conexión a la base de datos de Supabase. Clave: SUPABASE_URL y SUPABASE_KEY)`

- GET /cars: Obtiene la lista de autos.
- GET /cars/:marca: Obtiene un auto por su marca.
- GET /cars/:marca/:motor: Obtiene un auto por su marca y motor.