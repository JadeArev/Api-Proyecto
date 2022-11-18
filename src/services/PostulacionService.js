import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const PostulacionTabla = process.env.DB_TABLA_Postulaciones


export class PostulacionService {

    getPostulacion = async () => {
        console.log(config);
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT DISTINCT
        Mascota.[IdMascota]	 ,
        Mascota.[NombreMascota]	 ,
        Mascota.[Edad]		 ,
        Mascota.[Estado]	 ,
        Mascota.[IdRefugio]	 ,
        Mascota.[Foto]		 ,
        Mascota.[IdRaza]	 ,
        Mascota.[Castrado]	 ,
        Usuario.[Nombre]	 ,
        Usuario.[Apellido]
FROM Mascota
INNER JOIN Postulaciones ON Mascota.IdMascota = Postulaciones.IdMascota
INNER JOIN Usuario ON Postulaciones.IdUsuario = Usuario.IdUsuario
order by Mascota.[IdMascota]

`);
        console.log(response)
        return response.recordset;
    }
    
    getPostulacionById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT DISTINCT
		Mascota.[IdMascota]	 ,
		Mascota.[Nombre]	 ,
		Mascota.[Edad]		 ,
		Mascota.[Estado]	 ,
		Mascota.[IdRefugio]	 ,
		Mascota.[Foto]		 ,
		Mascota.[IdRaza]	 ,
		Mascota.[Castrado]	 ,
		Usuario.[Nombre]	 ,
		Usuario.[Apellido]
FROM Mascota
INNER JOIN Postulaciones ON Mascota.IdMascota = Postulaciones.IdMascota
INNER JOIN Usuario ON Postulaciones.IdUsuario = Usuario.IdUsuario
order by Mascota.[IdMascota]
`);
        console.log(response)
        
            return response.recordset[0];
    }

    createPostulacion = async (Postulacion) => { 
        
        console.log(`Red is sus`);

        const pool = await  sql.connect(config);
        const response = await pool.request()
         // .input('IdPostulacion',sql.Int, Postulacion?.IdPostulacion ?? '')
            .input('IdUsuario',sql.Int, Postulacion?.IdUsuario ?? '')
            .input('IdMascota',sql.Int, Postulacion?.IdMascota ?? '')
            .input('Aceptado',sql.Bit, Postulacion?.Aceptado ?? '')
            .query(`INSERT INTO ${PostulacionTabla} (IdUsuario, IdMascota, Aceptado) VALUES (@IdUsuario, @IdMascota, @Aceptado)`);
        console.log(response)

        return response.recordset;
    }

    updatePostulacionById = async (id, Postulacion) => {
        console.log('This is a function on the service');
        console.log(id)
        const pool = await  sql.connect(config);
        const response = await pool.request()
        .input('IdPostulacion',sql.Int, id)
        .input('IdUsuario',sql.Int, Postulacion?.IdUsuario ?? '')
        .input('IdMascota',sql.Int, Postulacion?.IdMascota ?? '')
        .input('IdMascota',sql.Bit, Postulacion?.Aceptado ?? '')
       
            .query(`UPDATE  ${PostulacionTabla} SET IdUsuario = @IdUsuario, IdMascota = @IdMascota, Aceptado = @Aceptado WHERE IdPostulacion = @Id`);
        console.log(response)

        return response.recordset;
    }

    deletePostulacionById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${PostulacionTabla} WHERE IdPostulacion = @id`);
        console.log(response)

        return response.recordset;
    }
}