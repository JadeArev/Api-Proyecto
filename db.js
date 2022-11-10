import 'dotenv/config'
import sql from 'mssql/msnodesqlv8.js';
var config = {
  driver: 'msnodesqlv8',
  connectionString: 'Driver=SQL Server;Server=DESKTOP-43PO4QG\SQLEXPRESS01;Database=Api;Trusted_Connection=true;'
};

// import sql from 'mssql'
// const config = {
//   user: process.env.DB_USER,
//   // password:'',
//   port: 1433,
//   server: process.env.DB_SERVER,
//   database: process.env.DB_NAME,
//   options: {
//     trustServerCertificate: true,
//     encrypt: false,
//   },
// };

export default config;
