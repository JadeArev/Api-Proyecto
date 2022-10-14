import {Router} from 'express';
import { PostulacionService } from '../services/PostulacionService.js';

const router = Router();
const postulacionService = new PostulacionService();

router.get('/', async (req, res) => {
  console.log(`another brick`);

  const Postulacion  = await postulacionService.getPostulacion();
 
  return res.status(200).json(Postulacion);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const Postulacion = await postulacionService.getPostulacionById(req.params.id);

  return res.status(200).json(Postulacion);
});

router.post("/", async (req, res) => {
  console.log(`nice opinion`);

  const Postulacion = await postulacionService.createPostulacion(req.body);

  return res.status(201).json(Postulacion);
});

router.put(':id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const Postulacion = await postulacionService.updatePostulacionById(req.params.id, req.body);

  return res.status(200).json(Postulacion);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const Postulacion = await postulacionService.deletePostulacionById(req.params.id);

  return res.status(200).json(Postulacion);
});

export default router;