import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "clave_secreta_temporal";

export default function handler(req, res) {
if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
}

const { usuario, password } = req.body;

if (usuario === "admin" && password === "1234") {
    const token = jwt.sign({ usuario }, SECRET_KEY, { expiresIn: "1h" });
    return res.status(200).json({ token });
}

return res.status(401).json({ error: "Credenciales inválidas" });
}
