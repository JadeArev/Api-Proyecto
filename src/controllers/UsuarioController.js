import { generarJWT } from '../utils/generar-jwt.js'
import { Router } from 'express';
import { UsuarioService } from '../services/UsuarioService.js';
import { validarJWT } from '../utils/validar-jwt.js';

import bcryptjs from 'bcryptjs';


const router = Router();
const usuarioService = new UsuarioService();

router.get('', async (req, res) => {

  const Usuarios = await usuarioService.getUsuarios();
 
  return res.status(200).json(Usuarios);
});

// router.get('/auth',[validarJWT], async (req,res) => {

//     const token = await generarJWT( req.usuario.id )
  
//     res.json({
//       usuario: req.usuario,
//       token: token,
//     })
//   } 
// ) 


router.get('/:id', async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
    const {id} = req.params
  const Usuarios = await usuarioService.getUsuarioById(id);
 

  return res.status(200).json(Usuarios);
});


router.post('', async (req, res) => {
  const salt = bcryptjs.genSaltSync()
	req.body.Password = bcryptjs.hashSync(req.body.Password, salt)
  const Usuarios = await usuarioService.createUsuario(req.body);
 

  return res.status(201).json(Usuarios);
});

// router.post('/login', async(req,res) => {
//     console.log("Si llega! Si se puede!")
//     const usuario = await usuarioService.login(req.body)
//   console.log(usuario)
//     if(!usuario){
//         return res.status(400).json({
//             mensaje: 'Email / passsword no son correctos - correo'
//         })
//     }

//     const validPassword = bcryptjs.compareSync(req.body.Password, usuario.Password)
//     if(!validPassword){
//         return res.status(400).json({
//             mensaje: 'La contraseña es incorrecta'
//         })
//     }

//     const token = await generarJWT(usuario.IdUsuario)


//     return res.status(200).json({usuario, token})
// } )



export default router;