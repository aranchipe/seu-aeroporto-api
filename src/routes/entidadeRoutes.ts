import { Router } from 'express';
import { getEntidades } from '../controllers/entidadeController';

const router = Router();
router.get('/', getEntidades);

export default router;
