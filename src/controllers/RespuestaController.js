import {Router} from 'express';
import { RespuestaService } from '../services/RespuestaService.js';

const router = Router();
const respuestaService = new RespuestaService();
const Service = new RespuestaService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);

  const Respuesta  = await Service.getRespuestas();
 
  return res.status(200).json(Respuesta);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const Respuesta = await respuestaService.getRespuestaById(req.params.id);

  return res.status(200).json(Respuesta);
});

router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const Respuesta = await Respuestaervice.createRespuesta(req.body);

  return res.status(201).json(Respuesta);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const Respuesta = await Respuestaervice.updateRespuestaById(req.params.id, req.body);

  return res.status(200).json(Respuesta);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const Respuesta = await Respuestaervice.deleteRespuestaById(req.params.id);

  return res.status(200).json(Respuesta);
});

export default router;