import { generarJWT } from '../utils/generar-jwt.js'
import { Router } from 'express';
import { UsuarioService } from '../services/UsuarioService.js';
import { RefugioService } from '../services/RefugioService.js';
import { validarJWT } from '../utils/validar-jwt.js';

import bcryptjs from 'bcryptjs';


const router = Router();
const usuarioService = new UsuarioService();
const refugioService = new RefugioService();

router.get('/',[validarJWT], async (req,res) => {
    if(req.usuario?.IdUsuario){
        const token = await generarJWT( req.usuario.IdUsuario )
        res.json({
          usuario: req.usuario,
          token: token,
        })
        
    }else {
        const token = await generarJWT( req.refugio.IdRefugio )
        res.json({
            refugio: req.refugio,
            token: token,
          })
    }
  
  } 
) 

router.post('/loginUsuario', async(req,res) => {
    const usuario = await usuarioService.login(req.body)
  console.log(usuario)
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


router.post('/loginRefugio', async(req,res) => {
    const refugio = await refugioService.loginRefugio(req.body)
    if(!refugio){
        return res.status(400).json({
            mensaje: 'Email / passsword no son correctos'
        })
    }

    // const validPassword = bcryptjs.compareSync(req.body.Password, refugio.Password)
    // if(!validPassword){
    //     return res.status(400).json({
    //         mensaje: 'La contraseña es incorrecta'
    //     })
    // }

    const token = await generarJWT(refugio.IdRefugio, true)


    return res.status(200).json({refugio, token})
} )

export default router;