import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const mysqlPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default mysqlPool;