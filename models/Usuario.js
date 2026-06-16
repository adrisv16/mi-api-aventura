import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema(
{
    nombre: { type: String, required: true },
    email: { type: String, required: true },
},
{
    timestamps: true,
}
);

export default mongoose.models.Usuario || mongoose.model("Usuario", UsuarioSchema);
