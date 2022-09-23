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

    createRespuesta = async (Respuestas) => {
        console.log('This is a function on the service');
        console.log(Respuestas);
        const pool = await  sql.connect(config);
        const response = await pool.request()
            .input('Descripcion',sql.VarChar, Respuestas?.Descripcion ?? '')
            .input('IdPregunta',sql.Int, Respuestas?.IdPregunta ?? '')
            .input('IdPostulacion',sql.Int, Respuestas?.IdPostulacion ?? '')
            .query(`INSERT INTO ${RespuestasTabla}(Descripcion, IdPregunta, IdPostulacion) VALUES (@Descripcion, @IdPregunta, @IdPostulacion)`);
        console.log(response)

        return response.recordset;
    }

    updateRespuestasById = async (id, Respuestas) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('IdRespuesta',sql.Int, Respuestas?.IdRespuesta ?? '')
        .input('Descripcion',sql.VarChar, Respuestas?.Descripcion ?? '')
        .input('IdPregunta',sql.Int, Respuestas?.IdPregunta ?? '')
        .input('IdPostulacion',sql.Int, Respuestas?.IdPostulacion ?? '')
            .query(`UPDATE Respuestas SET IdRespuesta = @IdRespuesta, Descripcion = @Descripcion, IdPregunta = @IdPregunta, IdPostulacion = @IdPostulacion WHERE IdRespuestas = @Id`);
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