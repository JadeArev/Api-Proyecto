import express from "express";
import cors from "cors";
import MascotaRouter from "./src/controllers/MascotaController.js";
import RefugioRouter from "./src/controllers/RefugioController.js";
import RazaRouter from "./src/controllers/RazaController.js";
import PreguntaRouter from "./src/controllers/PreguntaController.js";
import RespuestaRouter from "./src/controllers/RespuestaController.js";
import PostulacionRouter from "./src/controllers/PostulacionController.js";
import UsuarioRouter from "./src/controllers/UsuarioController.js";
import AuthRouter from './src/controllers/AuthController.js'

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/Mascota", MascotaRouter);
app.use("/Refugio", RefugioRouter);
app.use("/Raza", RazaRouter);
app.use("/Pregunta", PreguntaRouter);
app.use("/Respuesta", RespuestaRouter);
app.use("/Postulaciones", PostulacionRouter);
app.use("/Usuario", UsuarioRouter);
app.use("/Auth", AuthRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});