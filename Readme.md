# 🚗 API Autos

API desarrollada a modo de práctica. Permite obtener, filtrar y crear autos utilizando una base de datos real alojada en **Supabase**.  
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
   SUPABASE_SERVICE_ROLE=tu_clave_service_role
   PRIVATE_API_KEY=clave_privada_para_posts
   ```
4. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   

## 🌐 URL Base (Deploy en Vercel)
--- https://api-autos-three.vercel.app/ `(IMPORANTE: Cargar la variable de entorno para la conexión a la base de datos de Supabase. Clave: SUPABASE_URL, SUPABASE_KEY, SUPABASE_SERVICE_ROLE), PRIVATE_API_KEY)`

## 📚 Endpoints disponibles
🔵 GET – Endpoints públicos

- GET /cars: Obtiene la lista de autos.
- GET /cars/:marca: Obtiene un auto por su marca.
- GET /cars/:marca/:motor: Obtiene un auto por su marca y motor.

Todos los endpoints GET son públicos.
No requieren autenticación.

🔒 Endpoints protegidos (POST, PUT, DELETE)

Para modificar la base de datos es obligatorio enviar una API Key privada.

🟢 Ejemplos de uso:

Header requerido:
```plaintext
x-api-key: clave_privada_para_posts
```


headers:
```
{
  "Content-Type": "application/json",
  "x-api-key": "TU_PRIVATE_API_KEY"
}
```

body:
```
{
  "marca": "Toyota",
  "modelo": "Corolla",
  "motor": "1.8L",
  "año": 2020
}
``` 

- POST /cars: Crea un nuevo auto.
- PUT /cars/:id: Actualiza un auto existente.
- DELETE /cars/:id: Elimina un auto existente.
