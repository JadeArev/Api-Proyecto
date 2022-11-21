import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const RefugioTabla = process.env.DB_TABLA_REFUGIO


export class RefugioService {

    getRefugio= async () => {
        console.log('This is a function on the service');
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * from ${RefugioTabla}`);
        console.log(response)

        return response.recordset;
    }

  

    getRefugioById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${RefugioTabla} where IdRefugio = @id`);
        console.log(response)
        
        return response.recordset[0];
    }

    createRefugio = async (Refugio) => {
        console.log('This is a function on the service');

        const pool = await  sql.connect(config);
        const response = await pool.request()
            .input('Nombre',sql.VarChar, Refugio?.Nombre ?? '')
            .input('Telefono',sql.VarChar, Refugio?.Telefono ?? '')
            .input('Email',sql.VarChar, Refugio?.Email ?? '')
            .input('Password',sql.VarChar, Refugio?.Password ?? '')
            .input('Foto',sql.VarChar, Refugio?.Foto ?? '')
            .input('Direccion',sql.VarChar, Refugio?.Direccion ?? '')
            .query(`INSERT INTO ${RefugioTabla}(Nombre,Telefono, Email, Password, Foto, Direccion) VALUES (@Nombre, @Telefono, @Email, @Password, @Foto, @Direccion)`);
        console.log(response)

        return response.recordset;
    }

    loginRefugio = async (refugio) => {
        const pool = await  sql.connect(config);
        const response = await pool.request()
        .input('Email',sql.VarChar, refugio?.Email ?? '')
        .query(`SELECT * from ${RefugioTabla} where Email = @Email`);
        return response.recordset[0]; 
    }

    updateRefugioById = async (id, Refugio) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .input('Nombre',sql.VarChar, Refugio?.Nombre ?? '')
            .input('Telefono',sql.VarChar, Refugio?.Telefono ?? '')
            .input('Email',sql.VarChar, Refugio?.Email ?? '')
            .input('Password',sql.VarChar, Refugio?.Password ?? '')
            .input('Foto',sql.VarChar, Refugio?.Foto ?? '')
            .input('Direccion',sql.VarChar, Refugio?.Direccion ?? '')
            .query(`UPDATE Refugio SET Nombre = @Nombre, Telefono = @Telefono, Email = @Email, Password = @Password, Foto = @Foto, Direccion = @Direccion WHERE IdRefugio = @Id`);
        console.log(response)

        return response.recordset;
    }

    deleteRefugioById = async (id) => {
        console.log('This is a function on the service');

        const pool =  await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${RefugioTabla} WHERE IdRefugio = @id`);
        console.log(response)

        return response.recordset;
    }
}