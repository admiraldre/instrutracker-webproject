import express from 'express';
import dotenv from 'dotenv/config';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import {mongoose} from 'mongoose';

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected!'))
.catch((err) => console.log('Database NOT connected', err))

const app = express();

app.use('/', authRoutes);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


