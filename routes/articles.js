import { Router } from 'express';
import passport from 'passport';
import Articles from '../service/main/articles';
import { executer, isNotUser } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Articles.getAll));
router.get('/:slug', passport.authenticate('jwt', { session: false }), executer(Articles.get));
router.post('/like/:id', passport.authenticate('jwt', { session: false }), isNotUser, executer(Articles.like));
router.post('/:slug', passport.authenticate('jwt', { session: false }), isNotUser, executer(Articles.update));
router.post('/', passport.authenticate('jwt', { session: false }), isNotUser, executer(Articles.create));
router.delete('/:slug', passport.authenticate('jwt', { session: false }), isNotUser, executer(Articles.delete));

export default router;
