import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const PostulacionTabla = process.env.DB_TABLA_Postulaciones


export class PostulacionService {

    getPostulacion = async () => {
        console.log('This is a function on the service');
        console.log(config);
        const pool = await sql.connect(config);
        console.log("aca llegue")
        const response = await pool.request().query(`SELECT * from ${PostulacionTabla}`);
        console.log(response)
        return response.recordset;
    }
    
    getPostulacionById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${PostulacionTabla} where IdPostulacion = @id`);
        console.log(response)
        
            return response.recordset[0];
    }

    createPostulacion = async (Postulacion) => {
        console.log('This is a function on the service');

        const pool = await  sql.connect(config);
        const response = await pool.request()
            .input('IdPostulacion',sql.Int, id)
            .input('IdUsuario',sql.Int, Postulacion?.IdUsuario ?? '')
            .query(`INSERT INTO ${PostulacionTabla}(IdPostulacion, IdUsuario) VALUES (@IdPostulacion, @IdUsuario)`);
        console.log(response)

        return response.recordset;
    }

    updatePostulacionById = async (id, Postulacion) => {
        console.log('This is a function on the service');
        console.log(id)
        const pool =await  sql.connect(config);
        const response = await pool.request()
        .input('IdPostulacion',sql.Int, id)
        .input('IdUsuario',sql.Int, Postulacion?.IdUsuario ?? '')
       
            .query(`UPDATE  ${PostulacionTabla} SET IdUsuario = @IdUsuario WHERE IdPostulacion = @Id`);
        console.log(response)

        return response.recordset;
    }

    deletePostulacionById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${PostulacionTabla} WHERE IDPostulacion = @id`);
        console.log(response)

        return response.recordset;
    }
}