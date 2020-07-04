import { Router } from 'express';
import passport from 'passport';
import Users from '../service/bot/users';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Users.getAll));
router.get('/:id', passport.authenticate('jwt', { session: false }), executer(Users.get));
router.get('/:id/getGifts', passport.authenticate('jwt', { session: false }), executer(Users.getGifts));

export default router;
