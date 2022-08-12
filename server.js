import express from "express";
import cors from "cors";
import MascotaRouter from "./src/controllers/MascotaController.js";
import RefugioRouter from "./src/controllers/RefugioController.js";
import RazaRouter from "./src/controllers/RazaController.js";
import FormularioRouter from "./src/controllers/FormularioController.js";
import RespuestaRouter from "./src/controllers/RespuestaController.js";

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

app.use("/Mascota", MascotaRouter);
app.use("/Refugio", RefugioRouter);
app.use("/Raza", RazaRouter);
app.use("/Formulario", FormularioRouter);
app.use("/Respuesta", RespuestaRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});