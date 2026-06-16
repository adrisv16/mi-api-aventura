import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const swaggerPath = path.resolve("./swagger.yaml");
const swaggerDocument = YAML.load(swaggerPath);

export default swaggerUi.serve;
export const config = {
api: {
    bodyParser: false,
    externalResolver: true,
},
};
