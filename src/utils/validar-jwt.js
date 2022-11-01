import { NextFunction, Request,Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'


//TODO : Terminar de implementar la validacion para obtener el usuario en el Usuario/auth
export const validarJWT = async (req,res,next)=> {
	const token = req.header('x-token')

	if(!token) {
		return res.json({
			msg: 'no hay token en la petición'
		})
	}

	try {
		const secret = process.env.SECRETORPRIVATEKEY ?? ''
		// const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY)
		const {uid} = jwt.verify(token,secret)
		// const user = await User.findById(uid)

		if(!user) {
			return res.status(401).json({
				msg: 'Usuario no existe en DB'
			})
		}


		
		req.user = user
		next()
        
	} catch (error) {
		console.log(error)
		res.status(401).json({
			msg: 'Token no válido'
		})
	}
}

