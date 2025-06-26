import express from 'express';
import cors from 'cors';
import tasksRouter from './routers/tasks';

const app= express();
app.use(cors());
app.use(express.json());
app.use('/api/tasks',tasksRouter);
export default app;