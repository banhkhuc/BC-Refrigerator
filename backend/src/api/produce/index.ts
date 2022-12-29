import Router from 'express';
import { verifyToken, verifyProduce } from 'middlewares';
import { getProducts, importProduct, exportProduct } from './controller';

const router = Router();

router.get('/all', [verifyToken, verifyProduce], getProducts);
router.post('/import', [verifyToken, verifyProduce], importProduct);
router.put('/export', [verifyToken, verifyProduce], exportProduct);

export default router;
