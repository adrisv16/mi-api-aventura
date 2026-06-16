import { connectDB } from "../../lib/mongodb.js";
import Usuario from "../../models/Usuario.js";
import { verificarToken } from "../../lib/auth.js";

export default async function handler(req, res) {
const decoded = verificarToken(req, res);
if (!decoded) return; 

try {
    await connectDB();

    if (req.method === "GET") {
    const usuarios = await Usuario.find();
    return res.status(200).json(usuarios);
    }

    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: `Método ${req.method} no permitido` });
} catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios", detalle: error.message });
}
}

