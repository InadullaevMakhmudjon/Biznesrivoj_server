import { Router } from 'express';
import passport from 'passport';
import Auth from '../service/main/auth';
import { executer } from '../middlewares';

const router = Router();

router.get('/login', executer(Auth.getToken));
router.post('/login', executer(Auth.login));
router.post('/logout', passport.authenticate('jwt', { session: false }), executer(Auth.logout)); // Tested Hook
router.get('/details', passport.authenticate('jwt', { session: false }), executer(Auth.details));

export default router;
