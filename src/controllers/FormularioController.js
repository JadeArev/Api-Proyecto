import {Router} from 'express';
import { FormularioService } from '../services/FormularioService.js';

const router = Router();
const formularioService = new FormularioService();

router.get('', async (req, res) => {
  console.log(`This is a get operation`);

  const Formulario  = await Service.getFormulario();
 
  return res.status(200).json(Formulario);
});

router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const Formulario = await formularioService.getFormularioById(req.params.id);

  return res.status(200).json(Formulario);
});

router.post('', async (req, res) => {
  console.log(`This is a post operation`);

  const Formulario = await Formularioervice.createFormulario(req.body);

  return res.status(201).json(Formulario);
});

router.put('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const Formulario = await Formularioervice.updateFormularioById(req.params.id, req.body);

  return res.status(200).json(Formulario);
});

router.delete('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const Formulario = await Formularioervice.deleteFormularioById(req.params.id);

  return res.status(200).json(Formulario);
});

export default router;