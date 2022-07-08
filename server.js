import express from "express";
import cors from "cors";
import MascotaRouter from "./src/controllers/MascotaController.js";
import RefugioRouter from "./src/controllers/RefugioController.js";
import RazaRouter from "./src/controllers/RazaController.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/Mascota", MascotaRouter);
app.use("/Refugio", RefugioRouter);
app.use("/Raza", RazaRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});