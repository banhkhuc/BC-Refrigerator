import { Router } from 'express';
import userRouter from './user';
import accountRouter from './account';
import productlineRouter from './productLine';
import facilityRouter from './facility';
import produceRouter from './produce';
import distributeRouter from './distribute';

const router = Router();

router.use('/user', userRouter);
router.use('/account', accountRouter);
router.use('/productline', productlineRouter);
router.use('/facilitiy', facilityRouter);
router.use('/produce', produceRouter);
router.use('/distribute', distributeRouter);

export default router;
