import { Router } from 'express';
import { RazaService } from '../services/RazaService.js';


const router = Router();
const razaService = new RazaService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);
  
  const Raza  = await razaService.getRaza();
 

  return res.status(200).json(Raza);
});

router.get('/:id',  async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const Raza = await razaService.getRazaById(req.params.id);

  return res.status(200).json(Raza);
});

router.post('',async (req, res) => {
  console.log(`This is a post operation`);

  const Raza = await razaService.createRaza(req.body);

  return res.status(201).json(Raza);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const Raza = await razaService.updateRazaById(req.params.id, req.body);

  return res.status(200).json(Raza);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const Raza = await razaService.deleteRazaById(req.params.id);

  return res.status(200).json(Raza);
});

export default router;