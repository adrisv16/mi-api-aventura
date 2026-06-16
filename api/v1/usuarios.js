import { connectDB } from "../../lib/mongodb.js";
import Usuario from "../../models/Usuario.js";

export default async function handler(req, res) {
try {
    await connectDB();

    if (req.method === "GET") {
    const usuarios = await Usuario.find();
    return res.status(200).json(usuarios);
    }

    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({
    error: `Método ${req.method} no permitido`,
    });
} catch (error) {
    console.error("Error en /api/v1/usuarios:", error);
    return res.status(500).json({
    error: "Error al obtener usuarios",
    detalle: error.message,
    });
}
}
