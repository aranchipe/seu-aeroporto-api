import { Request, Response } from 'express';
import { connect } from '../config/db';

export async function getDynamic(req: Request, res: Response): Promise<void> {
    const { entityName } = req.params;

    try {
        const { db } = await connect();
        const data = await db.collection('entidade').find({ name: entityName }).toArray();
        res.json(data[0] || {});
    } catch (error) {
        console.error('Erro ao buscar dados dinâmicos:', error);
        res.status(500).json({ error: 'Erro ao buscar dados dinâmicos' });
    }
}
