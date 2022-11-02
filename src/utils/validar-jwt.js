import jwt from 'jsonwebtoken'
import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

//TODO : Terminar de implementar la validacion para obtener el usuario en el Usuario/auth
export const validarJWT = async (req,res,next)=> {
	const token = req.header('x-token')

	if(!token) {
		return res.json({
			msg: 'no hay token en la petición'
		})
	}

	try {
		const secret = process.env.SECRETORPRIVATEKEY
		//uid llega vacio
		const {uid} = jwt.verify(token,secret)
		console.log("UID ", uid)
		const pool = await sql.connect(config);
        const response = await pool.request()
			.input('id',sql.Int, uid)
            .query(`SELECT * from Usuario where IdUsuario = @id`);
        const usuario = response.recordset[0];
		console.log(usuario)
		if(!usuario) {
			return res.status(401).json({
				msg: 'Usuario no existe en DB'
			})
		}

		req.usuario = usuario
		next()
        
	} catch (error) {
		console.log(error)
		res.status(401).json({
			msg: 'Token no válido'
		})
	}
}

