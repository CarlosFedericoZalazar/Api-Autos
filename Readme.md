# API Autos
Esta es una API a modo de practica. Se simula una base de datos de autos con diferentes marcas y motores (archivo guardado en data/autos.json).

## Dependencias:
- Express: Framework para construir la API.
- Nodemon: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.
- Cors: Middleware para habilitar CORS en la API.
- Supabase.
- Dotenv: Para manejar variables de entorno.

## Instalación
- npm install (para instalar las dependencias)

## Endpoints
--- Base URL: https://api-autos-three.vercel.app/

- GET /cars: Obtiene la lista de autos.
- GET /cars/:marca: Obtiene un auto por su marca.
- GET /cars/:marca/:motor: Obtiene un auto por su marca y motor.