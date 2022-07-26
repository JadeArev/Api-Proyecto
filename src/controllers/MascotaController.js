import { Router } from 'express';
import { MascotaService } from '../services/MascotaService.js';


const router = Router();
const mascotaService = new MascotaService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);

  const Mascotas  = await mascotaService.getMascota();
 
  return res.status(200).json(Mascotas);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const Mascotas = await mascotaService.getMascotaById(req.params.id);

  return res.status(200).json(Mascotas);
});

router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const Mascotas = await mascotaService.createMascota(req.body);

  return res.status(201).json(Mascotas);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const Mascotas = await mascotaService.updateMascotaById(req.params.id, req.body);

  return res.status(200).json(Mascotas);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const Mascotas = await mascotaService.deleteMascotaById(req.params.id);

  return res.status(200).json(Mascotas);
});

export default router;