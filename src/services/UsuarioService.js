import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'
import { generarJWT } from '../utils/generar-jwt.js'

const usuarioTabla = process.env.DB_TABLA_USUARIO


export class UsuarioService {

    getUsuarios = async () => {
        const pool = await sql.connect(config);
        const response = await pool.request().query(`SELECT * FROM ${usuarioTabla}`);
        return response.recordset;
    }

   
    getUsuarioById = async (id) => {

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${usuarioTabla} where IdUsuario = @id`);
            return response.recordset[0];
    }

    createUsuario = async (usuario) => {

        const pool = await  sql.connect(config);
        const response = await pool.request()
            .input('Nombre',sql.VarChar, usuario?.Nombre ?? '')
            .input('Apellido',sql.VarChar, usuario?.Apellido ?? 0)
            .input('Email',sql.VarChar, usuario?.Email ?? '')
            .input('Password',sql.VarChar, usuario?.Password ?? '')
            .input('IdRefugio',sql.Int, usuario?.IdRefugio ?? 0)
            .input('TipoUsuario',sql.Bit, usuario?.TipoUsuario ?? 0)
            .query(`INSERT INTO ${usuarioTabla}(Nombre, Apellido, Email, Password, TipoUsuario, IdRefugio) VALUES (@Nombre, @Apellido, @Email, @Password, @TipoUsuario, @IdRefugio)`);
        return response.recordset;
    }


    login = async (usuario) => {
        const pool = await  sql.connect(config);
        const response = await pool.request()
        .input('Email',sql.VarChar, usuario?.Email ?? '')
        .query(`SELECT TOP 1 * from ${usuarioTabla} where Email = @Email` );
        return response.recordset;
    }

    deleteUsuarioById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${usuarioTabla} WHERE IdUsuario = @id`);
        console.log(response)

        return response.recordset;
    }
}