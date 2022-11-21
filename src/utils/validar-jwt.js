import jwt from 'jsonwebtoken'
import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'



export const validarJWT = async (req,res,next)=> {
	const token = req.header('x-token')

	if(!token) {
		return res.json({
			mensaje: 'no hay token en la petición'
		})
	}
	let usuario = null
	let refugio = null
	try {
		const secret = process.env.SECRETORPRIVATEKEY
		const {uid, isRefugio} = jwt.verify(token,secret)
		console.log(isRefugio)
		console.log("UId",uid)
		if(isRefugio) {
			const pool = await sql.connect(config);
			const response = await pool.request()
			.input('id',sql.Int, uid)
			.query(`SELECT * from Refugio where IdRefugio = @id`);
			refugio = response.recordset[0]; 
			req.refugio = refugio
		}else{
			const pool = await sql.connect(config);
			const response = await pool.request()
			.input('id',sql.Int, uid)
			.query(`SELECT * from Usuario where IdUsuario = @id`);
			usuario = response.recordset[0]; 
			console.log(usuario)
			req.usuario = usuario

		}
		if(!usuario && !refugio) {
			return res.status(401).json({
				mensaje: 'Usuario | Refugio no existe en la Base de datos'
			})
		}


		
		// req.usuario = usuario
		next()
        
	} catch (error) {
		console.log(error)
		res.status(401).json({
			mensaje: 'Token no válido'
		})
	}
}

