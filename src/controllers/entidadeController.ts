import { Request, Response } from 'express';
import { connect } from '../config/db';

export async function getEntidades(req: Request, res: Response): Promise<void> {
    const { path, segment } = req.query as { path?: string; segment?: string };

    try {
        const { db } = await connect();
        const collection = db.collection('entidade');
        let data;

        if (path) {
            data = segment
                ? await collection.find({ path, 'segments.0': segment }).toArray()
                : await collection.find({ path }).toArray();
        } else {
            data = await collection.find({}).toArray();
        }

        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar entidades:', error);
        res.status(500).json({ error: 'Erro ao buscar entidades' });
    }
}
