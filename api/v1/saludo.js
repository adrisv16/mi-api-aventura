export default function handler(req, res) {
try {
    const { nombre } = req.query;

    if (!nombre || nombre.trim() === "") {
    
    return res.status(400).json({
        error: "Falta el parámetro 'nombre'. Por favor, proporciónalo en la consulta."
    });
    }

    res.status(200).json({
    mensaje: `¡Hola, ${nombre}!`
    });
} catch (error) {

    res.status(500).json({
    error: "Ocurrió un error interno en el servidor.",
    detalle: error.message
    });
}
}


