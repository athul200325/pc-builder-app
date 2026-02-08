import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mysqlPool from './config/db.js';
import usersRoutes from './routes/usersRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);

mysqlPool.query('SELECT 1').then(() => {
  console.log('Database connected successfully.');

  app.listen(process.env.PORT, () => {
    console.log('PC Builder Server is running on port 3000');
  });

}).catch((err) => {
  console.error('Database connection failed:', err);
});