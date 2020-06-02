import { Router } from 'express';
import passport from 'passport';
import Home from '../service/main/home';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Home.getAll));

export default router;
