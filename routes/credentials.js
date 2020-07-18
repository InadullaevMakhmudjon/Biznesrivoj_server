import { Router } from 'express';
import passport from 'passport';
import credentials from '../service/main/credentials';
import { isNotUser, executer } from '../middlewares';

const router = Router();

router.post('/', passport.authenticate('jwt', { session: false }), isNotUser, executer(credentials.getData));

export default router;
