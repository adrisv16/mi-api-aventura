import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "clave_secreta_temporal";

export function verificarToken(req, res) {
const authHeader = req.headers.authorization;

if (!authHeader) {
    res.status(401).json({ error: "Token no proporcionado" });
    return null;
}

const token = authHeader.split(" ")[1];

try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
} catch (error) {
    res.status(403).json({ error: "Token inválido o expirado" });
    return null;
}
}
