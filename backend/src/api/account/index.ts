import Router from 'express';
import { createAccount, login, forgot, resetPassword } from './controller';

const router = Router();

router.post('/create', createAccount);
router.post('/login', login);
router.post('/forgot', forgot);
router.post('/reset', resetPassword);

export default router;
