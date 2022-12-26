import { Router } from 'express';
import userRouter from './user';
import accountRouter from './account';
import productlineRouter from './productLine';

const router = Router();

router.use('/users', userRouter)
router.use('/accounts', accountRouter);
router.use('/productlines', productlineRouter);

export default router;
