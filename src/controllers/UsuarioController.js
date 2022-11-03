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

router.get('/auth',[validarJWT], async (req,res) => {

    const token = await generarJWT( req.usuario.id )
  
    res.json({
      usuario: req.usuario,
      token: token,
    })
  } 
) 


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

router.post('/login', async(req,res) => {
    const usuario = await usuarioService.login(req.body)

    if(!usuario){
        return res.status(400).json({
            mensaje: 'Email / passsword no son correctos - correo'
        })
    }

                                                
    const validPassword = bcryptjs.compareSync(req.body.Password, usuario.Password)
    if(!validPassword){
        return res.status(400).json({
            mensaje: 'La contraseña es incorrecta'
        })
    }

    const token = await generarJWT(usuario.IdUsuario)


    return res.status(200).json({usuario, token})
} )


// router.put('/:id', async (req, res) => {
//   console.log(`Request URL Param: ${req.params.id}`);
//   console.log(`This is a put operation`);

//   const Mascotas = await mascotaService.updateMascotaById(req.params.id, req.body);

//   return res.status(200).json(Mascotas);
// });

// router.delete('/:id', async (req, res) => {
//   console.log(`Request URL Param: ${req.params.id}`);
//   console.log(`This is a delete operation`);

//   const Mascotas = await mascotaService.deleteMascotaById(req.params.id);

//   return res.status(200).json(Mascotas);
// });

export default router;

// export const login = async (req, res) => {
// 	const {Email, Password} =req.body

// 	try {

// 		const user = await User.findOne({email})
// 		if(!user){
// 			return res.status(400).json({
// 				msg: 'Email / passsword no son correctos - correo'
// 			})
// 		}

// 		if(!user.estado){
// 			return res.status(400).json({
// 				msg: 'El usuario se encuentra con estado desactivado'
// 			})
// 		}

// 		const validPassword = bcryptjs.compareSync(password, user.password)
// 		if(!validPassword){
// 			return res.status(400).json({
// 				msg: 'La contraseña es incorrecta'
// 			})
// 		}
		
// 		//generar jwt
// 		const token = await generarJWT(user.id)

// 		res.json({
// 			user, 
// 			token
// 		})
// 	} catch (error) {
// 		console.log(error)
// 		return res.status(500).json({
// 			msg: 'Hable con el administrador'
// 		})
// 	}
// }

