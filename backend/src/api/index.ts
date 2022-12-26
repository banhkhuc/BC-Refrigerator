import { Router } from 'express';
import loginRouter from './login';
import registerRouter from './register';
import forgotRouter from './forgot';
import userRouter from './user';
import nationalityRouter from './nationality';
const router = Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter);
router.use('/forgot', forgotRouter);
router.use('/users', userRouter);
router.use('/nationalities', nationalityRouter);


export default router;
