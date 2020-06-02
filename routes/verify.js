import { Router } from 'express';
import passport from 'passport';
import Verify from '../service/main/verify';
import { executer } from '../middlewares';

const router = Router();

router.post('/send', passport.authenticate('jwt', { session: false }), executer(Verify.send));
router.post('/', passport.authenticate('jwt', { session: false }), executer(Verify.verify));

export default router;
