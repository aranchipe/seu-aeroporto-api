import { Router } from 'express';
import { getDynamic } from '../controllers/dynamicController';

const router = Router();
router.get('/:entityName', getDynamic);

export default router;
