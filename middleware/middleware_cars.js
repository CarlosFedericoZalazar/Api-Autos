export const middlewareCars = async (req, res, next) => {
    try {
        // Traer todos los autos
        const response = await fetch('https://api-autos-three.vercel.app/cars');
        const autos = await response.json();

        // Normalizar mayúsculas/minúsculas
        const marca = req.body.marca?.toLowerCase();
        const modelo = req.body.modelo?.toLowerCase();
        const motor = req.body.motor;

        if (!marca || !modelo) {
            return res.status(400).json({ error: "Faltan datos: marca y modelo son obligatorios" });
        }

        // Buscar si existe repetido
        const autoExistente = autos.find(a => 
            a.marca.toLowerCase() === marca &&
            a.modelo.toLowerCase() === modelo && a.motor === motor
        );

        if (autoExistente) {
            return res.status(409).json({ 
                error: "El auto con esa marca, modelo y motor ya existe",
                data: autoExistente
            });
        }

        console.log("Middleware: no existe duplicado, se permite crear el auto.");
        next();

    } catch (error) {
        console.log("Error fetching cars data in middleware:", error);
        return res.status(500).json({ error: "Error verificando autos" });
    }
};
