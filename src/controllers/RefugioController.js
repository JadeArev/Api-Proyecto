import { Router } from 'express';
import { RefugioService } from '../services/RefugioService.js';


const router = Router();
const refugioService = new RefugioService();

router.get('',  async (req, res) => {
  console.log(`This is a get operation`);
  const Refugio = await refugioService.getRefugio();
  return res.status(200).json(Refugio);
});

router.get('/:id',  async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const Refugio = await refugioService.getRefugioById(req.params.id);

  return res.status(200).json(Refugio);
});

router.post('',  async (req, res) => {
  console.log(`This is a post operation`);
    console.log(res);
  const Refugio = await refugioService.createRefugio(req.body);

  return res.status(201).json(Refugio);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const Refugio = await refugioService.updateRefugioById(req.params.id, req.body);

  return res.status(200).json(Refugio);
});

router.delete('/:id',  async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const Refugio = await refugioService.deleteRefugioById(req.params.id);

  return res.status(200).json(Refugio);
});

export default router;