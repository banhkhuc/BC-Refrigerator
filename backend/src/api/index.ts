import { Router } from 'express';
import accountRouter from './account';
import productlineRouter from './productLine';

const router = Router();

router.use('/account', accountRouter);
router.use('/productline', productlineRouter);

export default router;
