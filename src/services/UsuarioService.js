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
        .query(`SELECT * from ${usuario} where Email = @Email`);
        return response.recordset[0]; 
    }


    // updateMascotaById = async (id, Mascota) => {
    //     console.log('This is a function on the service');
    //     console.log(id)
    //     const pool =await  sql.connect(config);
    //     const response = await pool.request()
    //     .input('Id',sql.Int, id)
    //     .input('Nombre',sql.VarChar, Mascota?.Nombre ?? '')
    //     .input('Edad',sql.Int, Mascota?.Edad ?? 0)
    //     .input('Estado',sql.VarChar, Mascota?.Estado ?? '')
    //     .input('IdRefugio',sql.Int, Mascota?.IdRefugio ?? 0)
    //     .input('Foto',sql.VarChar, Mascota?.Foto ?? '')
    //     .input('IdRaza',sql.Int, Mascota?.IdRaza ?? 0)
    //     .input('Castrado',sql.Bit, Mascota?.Castrado ?? 0)
    //         .query(`UPDATE  ${mascotaTabla} SET Nombre = @Nombre, Edad = @Edad, Estado = @Estado, IdRefugio = @IdRefugio, Foto = @Foto, IdRaza=@IdRaza, Castrado=@Castrado WHERE IdMascota = @Id`);
    //     console.log(response)

    //     return response.recordset;
    // }

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