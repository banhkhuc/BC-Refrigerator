import { Router } from 'express';
import productlineRouter from './productLine';
const router = Router();

router.use('/productline', productlineRouter);

export default router;
