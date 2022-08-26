import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const PreguntaTabla = process.env.DB_TABLA_Pregunta


export class PreguntaService {

    getPregunta = async () => {
        console.log('This is a function on the service');
        console.log(config);
        const pool = await sql.connect(config);
        console.log("aca llegue")
        const response = await pool.request().query(`SELECT * from ${PreguntaTabla}`);
        console.log(response)
        return response.recordset;
    }
    
    getPreguntaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${PreguntaTabla} where IdPregunta = @id`);
        console.log(response)
        
            return response.recordset[0];
    }

    createPregunta = async (Pregunta) => {
        console.log('This is a function on the service');

        const pool = await  sql.connect(config);
        const response = await pool.request()
            .input('IdPregunta',sql.Int, id)
            .input('Descripcion',sql.VarChar, Pregunta?.Descripcion ?? '')
            .query(`INSERT INTO ${PreguntaTabla}(IdPregunta, Descripcion) VALUES (@IdPregunta, @Descripcion)`);
        console.log(response)

        return response.recordset;
    }

    updatePreguntaById = async (id, Pregunta) => {
        console.log('This is a function on the service');
        console.log(id)
        const pool =await  sql.connect(config);
        const response = await pool.request()
        .input('IdPregunta',sql.Int, id)
        .input('Descripcion',sql.VarChar, Pregunta?.Descripcion ?? '')
       
            .query(`UPDATE  ${PreguntaTabla} SET Descripcion = @Descripcion WHERE IdPregunta = @Id`);
        console.log(response)

        return response.recordset;
    }

    deletePreguntaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${PreguntaTabla} WHERE IDPregunta = @id`);
        console.log(response)

        return response.recordset;
    }
}