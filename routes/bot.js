import { Router } from 'express';
import passport from 'passport';
import Bot from '../service/bot/bot';
import { executer } from '../middlewares';

const router = Router();

router.post('/sendMessage', passport.authenticate('jwt', { session: false }), executer(Bot.sendMessage));

export default router;
