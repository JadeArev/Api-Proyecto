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
            .input('Nombre',sql.VarChar, Respuestas?.Nombre ?? '')
            .input('Telefono',sql.VarChar, Respuestas?.Telefono ?? '')
            .input('Email',sql.VarChar, Respuestas?.Email ?? '')
            .input('Password',sql.VarChar, Respuestas?.Password ?? '')
            .input('Foto',sql.VarChar, Respuestas?.Foto ?? '')
            .input('Direccion',sql.VarChar, Respuestas?.Direccion ?? '')
            .query(`INSERT INTO ${RespuestasTabla}(Nombre,Telefono, Email, Password, Foto, Direccion) VALUES (@Nombre, @Telefono, @Email, @Password, @Foto, @Direccion)`);
        console.log(response)

        return response.recordset;
    }

    updateRespuestasById = async (id, Respuestas) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .input('Nombre',sql.VarChar, Respuestas?.Nombre ?? '')
            .input('Telefono',sql.VarChar, Respuestas?.Telefono ?? '')
            .input('Email',sql.VarChar, Respuestas?.Email ?? '')
            .input('Password',sql.VarChar, Respuestas?.Password ?? '')
            .input('Foto',sql.VarChar, Respuestas?.Foto ?? '')
            .input('Direccion',sql.VarChar, Respuestas?.Direccion ?? '')
            .query(`UPDATE Respuestas SET Nombre = @Nombre, Telefono = @Telefono, Email = @Email, Password = @Password, Foto = @Foto, Direccion = @Direccion WHERE IdRespuestas = @Id`);
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