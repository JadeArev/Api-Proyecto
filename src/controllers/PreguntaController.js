import {Router} from 'express';
import { PreguntaService } from '../services/PreguntaService.js';

const router = Router();
const PreguntaService = new PreguntaService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);

  const Pregunta  = await PreguntaService.getPregunta();
 
  return res.status(200).json(Pregunta);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const Pregunta = await PreguntaService.getPreguntaById(req.params.id);

  return res.status(200).json(Pregunta);
});

router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const Pregunta = await Preguntaervice.createPregunta(req.body);

  return res.status(201).json(Pregunta);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const Pregunta = await Preguntaervice.updatePreguntaById(req.params.id, req.body);

  return res.status(200).json(Pregunta);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const Pregunta = await Preguntaervice.deletePreguntaById(req.params.id);

  return res.status(200).json(Pregunta);
});

export default router;