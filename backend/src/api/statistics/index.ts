import Router from 'express';
import { verifyAdmin, verifyToken } from 'middlewares';
import { getStatisticsDacilityById, getStatisticsProduce, getStatisticsDistribute, getStatisticsguarantee} from './controller';

const router = Router();

router.get('/produce/:id', getStatisticsDacilityById);
router.get('/distribute/:id', getStatisticsDacilityById);
router.get('/guarantee/:id', getStatisticsDacilityById);
router.get('/produce', getStatisticsProduce);
router.get('/distribute', getStatisticsDistribute);
router.get('/guarantee', getStatisticsguarantee);
export default router;
