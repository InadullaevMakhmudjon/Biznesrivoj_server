import { Router } from 'express';
import passport from 'passport';
import Delivery from '../service/bot/delivery';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Delivery.getAll));
router.post('/:id', passport.authenticate('jwt', { session: false }), executer(Delivery.update));

export default router;
