import { Router } from 'express';
import passport from 'passport';
import Users from '../service/main/users';
import { isNotUser, executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Users.getAll));
router.get('/editors', passport.authenticate('jwt', { session: false }), executer(Users.editors));
router.get('/:id', passport.authenticate('jwt', { session: false }), executer(Users.get));
router.get('/:id/articles', passport.authenticate('jwt', { session: false }), executer(Users.articles));
router.get('/:id/bookmarks', passport.authenticate('jwt', { session: false }), executer(Users.bookmarks));
router.post('/', passport.authenticate('jwt', { session: false }), executer(Users.create));
router.post('/:id', passport.authenticate('jwt', { session: false }), executer(Users.update));
router.delete('/:id', passport.authenticate('jwt', { session: false }), isNotUser, executer(Users.delete));

export default router;
