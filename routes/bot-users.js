import { Router } from 'express';
import passport from 'passport';
import Users from '../service/bot/users';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Users.getAll));

export default router;
