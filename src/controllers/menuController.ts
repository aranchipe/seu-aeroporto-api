import { Request, Response } from 'express';
import { connect } from '../config/db';

export async function getMenu(req: Request, res: Response): Promise<void> {
    try {
        const { db } = await connect();
        const data = await db.collection('menu').find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar menu:', error);
        res.status(500).json({ error: 'Erro ao buscar menu' });
    }
}
