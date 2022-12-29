import Router from 'express';
import { verifyAdmin, verifyToken } from 'middlewares';
import { getProductLine, getProductLineById, addProductLine, updateProductLine } from './controller';

const router = Router();

router.get('/pagination', getProductLine);
router.get('/:id', getProductLineById);
router.post('/', addProductLine);
router.put('/:id', updateProductLine);

export default router;
