import express, { Request, Response } from 'express';
import menuRouter from './routes/menuRoutes';
import entidadeRouter from './routes/entidadeRoutes';
import dynamicRoutes from './routes/dynamicRoutes';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/menu', menuRouter);
app.use('/entidades', entidadeRouter);
app.use('/entidades', dynamicRoutes);


// Endpoint para rota padrão
app.get('/', (req: Request, res: Response) => {
    res.send('API funcionando!');
});

// Exporta o app para Vercel
export default app;
