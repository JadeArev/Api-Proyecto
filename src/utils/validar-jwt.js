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

	try {
		const secret = process.env.SECRETORPRIVATEKEY
		const {uid} = jwt.verify(token,secret)
		// const user = await User.findById(uid)
		console.log("uid ", uid)
		const pool = await sql.connect(config);
        const response = await pool.request()
        .input('id',sql.Int, uid)
        .query(`SELECT * from Usuario where IdUsuario = @id`);
        const usuario = response.recordset[0]; 
		console.log("Usuario ",usuario)
		if(!usuario) {
			return res.status(401).json({
				mensaje: 'Usuario no existe en la Base de datos'
			})
		}


		
		req.usuario = usuario
		next()
        
	} catch (error) {
		console.log(error)
		res.status(401).json({
			mensaje: 'Token no válido'
		})
	}
}

