import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const RazaTabla = process.env.DB_TABLA_RAZAS

export class RazaService {

    getRaza= async () => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${RazaTabla}`);
        console.log(response)
        return response.recordset;
    }

    getRazaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${RazaTabla} where IdRaza = @id`);
        console.log(response)
        return response.recordset[0];
    }

    createRaza = async (Raza) => {
        console.log('This is a function on the service');

        const pool = await  sql.connect(config);
        const response = await pool.request()
            .input('Nombre',sql.VarChar, Raza?.Nombre ?? '') 
            .query(`INSERT INTO ${RazaTabla}(Nombre) VALUES (@Nombre)`);
        console.log(response)

        return response.recordset;
    }

    updateRazaById = async (id, Raza) => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request()
        .input('IdRaza',sql.Int, id)
        .input('Nombre',sql.VarChar, Raza?.Nombre ?? '')
        .query(`UPDATE ${RazaTabla} SET Nombre = @Nombre WHERE IdRaza = @IdRaza`);
        console.log(response)

        return response.recordset;
    }

    deleteRazaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${RazaTabla} WHERE IdRaza = @id`);
        console.log(response)

        return response.recordset;
    }
}