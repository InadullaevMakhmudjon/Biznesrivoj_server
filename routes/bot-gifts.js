import { Router } from 'express';
import passport from 'passport';
import Gifts from '../service/bot/gifts';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Gifts.getAll));
router.get('/:id', passport.authenticate('jwt', { session: false }), executer(Gifts.get));
router.get('/afford/:point', passport.authenticate('jwt', { session: false }), executer(Gifts.getAfford));
router.post('/', passport.authenticate('jwt', { session: false }), executer(Gifts.create));
router.post('/:id', passport.authenticate('jwt', { session: false }), executer(Gifts.update));

export default router;
