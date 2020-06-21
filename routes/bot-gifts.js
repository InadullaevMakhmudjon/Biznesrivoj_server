import { Router } from 'express';
import passport from 'passport';
import Gifts from '../service/bot/gifts';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Gifts.getAll));
router.post('/', passport.authenticate('jwt', { session: false }), executer(Gifts.create));

export default router;
