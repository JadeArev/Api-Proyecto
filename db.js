import 'dotenv/config'
<<<<<<< HEAD
// import sql from 'mssql/msnodesqlv8.js';
// var config = {
//   driver: 'msnodesqlv8',
//   connectionString: 'Driver=SQL Server;Server=PBOTTINO\\PBOTTINO;Database=Api;Trusted_Connection=true;'
=======
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
>>>>>>> d3e5fa12db2d3d934d2f3f4d3aaa9b51e0615a81
// };

import sql from 'mssql'
const config = {
  user: process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  port: 1433,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    trustServerCertificate: true,
    encrypt: false,
  },
};

export default config;
