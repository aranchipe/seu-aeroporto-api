import express from 'express';
import cors from 'cors';

import menuRoutes from './routes/menuRoutes';
import entidadeRoutes from './routes/entidadeRoutes';
import dynamicRoutes from './routes/dynamicRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/', menuRoutes);
app.use('/entidades', entidadeRoutes);
app.use('/entidades', dynamicRoutes);

export default app;
