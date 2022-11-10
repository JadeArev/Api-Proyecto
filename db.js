import 'dotenv/config'


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
