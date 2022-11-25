import sql from 'mssql'
import config from '../../db.js'
import 'dotenv/config'

const mascotaTabla = process.env.DB_TABLA_MASCOTA


export class MascotaService {

    getMascota = async () => {
        console.log('This is a function on the service');
        console.log(config);
        const pool = await sql.connect(config);
        console.log("aca llegué")
        const response = await pool.request().query(`SELECT Mascota.Edad, Mascota.Foto, (SELECT Nombre from Raza where IdRaza = Mascota.IdRaza) as NombreRaza, (SELECT Nombre from Refugio where IdRefugio = Mascota.IdRefugio) as NombreRefugio, Mascota.IdRaza, Mascota.Estado, Mascota.NombreMascota, Mascota.IdRefugio, Mascota.Castrado, Mascota.IdMascota from Mascota`);
        console.log(response)   
        return response.recordset;
    }

   
    

    getMascotaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`SELECT * from ${mascotaTabla} where IdMascota = @id`);
        console.log(response)
        
            return response.recordset[0];
    }

    createMascota = async (Mascota) => {
        console.log('This is a function on the service');

        const pool = await  sql.connect(config);
        const response = await pool.request()
            .input('NombreMascota',sql.VarChar, Mascota?.NombreMascota ?? '')
            .input('Edad',sql.Int, Mascota?.Edad ?? 0)
            .input('Estado',sql.VarChar, Mascota?.Estado ?? '')
            .input('IdRefugio',sql.Int, Mascota?.IdRefugio ?? 0)
            .input('Foto',sql.VarChar, Mascota?.Foto ?? '')
            .input('IdRaza',sql.Int, Mascota?.IdRaza ?? 0)
            .input('Castrado',sql.Bit, Mascota?.Castrado ?? 0)
            .query(`INSERT INTO ${mascotaTabla}(NombreMascota, Edad, Estado, IdRefugio, Foto, IdRaza, Castrado) VALUES (@NombreMascota, @Edad, @Estado, @IdRefugio, @Foto, @IdRaza, @Castrado)`);
        console.log(response)

        return response.recordset;
    }

    updateMascotaById = async (id, Mascota) => {
        console.log('This is a function on the service');
        console.log(id)
        const pool =await  sql.connect(config);
        const response = await pool.request()
        .input('Id',sql.Int, id)
        .input('NombreMascota',sql.VarChar, Mascota?.NombreMascota ?? '')
        .input('Edad',sql.Int, Mascota?.Edad ?? 0)
        .input('Estado',sql.VarChar, Mascota?.Estado ?? '')
        .input('IdRefugio',sql.Int, Mascota?.IdRefugio ?? 0)
        .input('Foto',sql.VarChar, Mascota?.Foto ?? '')
        .input('IdRaza',sql.Int, Mascota?.IdRaza ?? 0)
        .input('Castrado',sql.Bit, Mascota?.Castrado ?? 0)
            .query(`UPDATE  ${mascotaTabla} SET NombreMascota = @NombreMascota, Edad = @Edad, Estado = @Estado, IdRefugio = @IdRefugio, Foto = @Foto, IdRaza=@IdRaza, Castrado=@Castrado WHERE IdMascota = @Id`);
        console.log(response)

        return response.recordset;
    }

    deleteMascotaById = async (id) => {
        console.log('This is a function on the service');

        const pool = await sql.connect(config);
        const response = await pool.request()
            .input('id',sql.Int, id)
            .query(`DELETE FROM ${mascotaTabla} WHERE IDMascota = @id`);
        console.log(response)

        return response.recordset;
    }
}