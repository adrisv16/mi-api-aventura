export default function handler(req, res) {
const { nombre } = req.query;

if (!nombre) {
    return res.status(400).json({
    mensaje: "Por favor, proporciona un nombre en la consulta."
    });
}

res.status(200).json({
    mensaje: `¡Hola, ${nombre}!`
});
}

