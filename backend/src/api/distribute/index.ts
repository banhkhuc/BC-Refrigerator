import Router from 'express';
import { verifyToken, verifyDistribute } from 'middlewares';
import { getProducts, importProduct, exportProduct } from './controller';

const router = Router();

router.get('/all', [verifyToken, verifyDistribute], getProducts);
router.post('/import', [verifyToken, verifyDistribute], importProduct);
router.post('/export', [verifyToken, verifyDistribute], exportProduct);

export default router;
