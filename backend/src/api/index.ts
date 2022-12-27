import { Router } from 'express';
import userRouter from './user';
import accountRouter from './account';
import productlineRouter from './productLine';
import facilityRouter from './facility';

const router = Router();

router.use('/users', userRouter);
router.use('/accounts', accountRouter);
router.use('/productlines', productlineRouter);
router.use('/facilities', facilityRouter);

export default router;
