import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const swaggerPath = path.resolve("./swagger.yaml");
const swaggerDocument = YAML.load(swaggerPath);

export default function handler(req, res) {
if (req.method === "GET") {
    return swaggerUi.setup(swaggerDocument)(req, res);
}

return res.status(405).json({ error: "Método no permitido" });
}

export const config = {
api: {
    bodyParser: false,
    externalResolver: true,
},
};
