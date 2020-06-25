import { Router } from 'express';
import passport from 'passport';
import Orders from '../service/bot/orders';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Orders.getAll));
router.get('/:id', passport.authenticate('jwt', { session: false }), executer(Orders.get));

export default router;
