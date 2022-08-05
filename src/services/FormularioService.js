import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const FormularioTabla = process.env.DB_TABLA_FORMULARIO


export class FormularioService {

    getFormulario = async () => {
        console.log('This is a function on the service');
        console.log(config);
        const pool = await sql.connect(config);
        console.log("aca llegue")
        const response = await pool.request().query(`SELECT * from ${FormularioTabla}`);
        console.log(response)
        return response.recordset;
    }

   
    

    getFormularioById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${FormularioTabla} where IdFormulario = @id`);
        console.log(response)
        
            return response.recordset[0];
    }

    createFormulario = async (Formulario) => {
        console.log('This is a function on the service');

        const pool = await  sql.connect(config);
        const response = await pool.request()
            .input('IdFormulario',sql.Int, id)
            .input('Descripcion',sql.VarChar, Formulario?.Descripcion ?? '')
            .query(`INSERT INTO ${FormularioTabla}(IdFormulario, Descripcion) VALUES (@IdFormulario, @Descripcion)`);
        console.log(response)

        return response.recordset;
    }

    updateFormularioById = async (id, Formulario) => {
        console.log('This is a function on the service');
        console.log(id)
        const pool =await  sql.connect(config);
        const response = await pool.request()
        .input('IdFormulario',sql.Int, id)
        .input('Descripcion',sql.VarChar, Formulario?.Descripcion ?? '')
       
            .query(`UPDATE  ${FormularioTabla} SET Descripcion = @Descripcion WHERE IdFormulario = @Id`);
        console.log(response)

        return response.recordset;
    }

    deleteFormularioById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${FormularioTabla} WHERE IDFormulario = @id`);
        console.log(response)

        return response.recordset;
    }
}