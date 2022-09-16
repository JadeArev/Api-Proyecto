import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const RespuestasTabla = process.env.DB_TABLA_Respuestas


export class RespuestaService {

    getRespuestas = async () => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${RespuestasTabla}`);
        console.log(response)

        return response.recordset;
    }

  

    getRespuestasById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${RespuestasTabla} where IdRespuestas = @id`);
        console.log(response)
        
        return response.recordset[0];
    }

    createRespuestas = async (Respuestas) => {
        console.log('This is a function on the service');

        const pool = await  sql.connect(config);
        const response = await pool.request()
            .input('IdRespuesta',sql.Int, Respuestas?.IdRespuesta ?? '')
            .input('Descripcion',sql.VarChar, Respuestas?.Descripcion ?? '')
            .input('IdFormulario',sql.Int, Respuestas?.IdUsuario ?? '')
            .input('IdMascota',sql.Int, Respuestas?.IdMascota ?? '')
            .input('IdUsuario',sql.Int, Respuestas?.IdUsuario ?? '')
            .query(`INSERT INTO ${RespuestasTabla}(IdRespuesta,Descripcion, IdFormulario, IdMascota, IdUsuario) VALUES (@IdRespuesta, @Descripcion, @IdFormulario, @IdMascota, @IdUsuario)`);
        console.log(response)

        return response.recordset;
    }

    updateRespuestasById = async (id, Respuestas) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('IdRespuesta',sql.Int, IdRespuesta)
            .input('Descripcion',sql.VarChar, Respuestas?.Descripcion ?? '')
            .input('IdFormulario',sql.Int, Respuestas?.IdFormulario?? '')
            .input('IdMascota',sql.Int, Respuestas?.IdMascota ?? '')
            .input('IdUsuario',sql.Int, Respuestas?.IdUsuario ?? '')
            .query(`UPDATE Respuestas SET IdRespuesta = @IdRespuesta, Descripcion = @Descripcion, IdFormulario = @IdFormulario, IdMascota = @IdMascota, IdUsuario = @IdUsuario WHERE IdRespuestas = @Id`);
        console.log(response)

        return response.recordset;
    }

    deleteRespuestasById = async (id) => {
        console.log('This is a function on the service');

        const pool =  await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${RespuestasTabla} WHERE IdRespuestas = @id`);
        console.log(response)

        return response.recordset;
    }
}