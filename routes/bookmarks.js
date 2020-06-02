import { Router } from 'express';
import passport from 'passport';
import Bookmark from '../service/main/bookmarks';
import { executer, isNotUser } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Bookmark.getAll));
router.get('/:id', passport.authenticate('jwt', { session: false }), executer(Bookmark.get));
router.get('/user/:id', passport.authenticate('jwt', { session: false }), isNotUser, executer(Bookmark.getUser));
router.get('/article/:id', passport.authenticate('jwt', { session: false }), executer(Bookmark.getArticle));
router.post('/:id', passport.authenticate('jwt', { session: false }), isNotUser, executer(Bookmark.create));
router.delete('/', passport.authenticate('jwt', { session: false }), isNotUser, executer(Bookmark.deleteAll));
router.delete('/:id', passport.authenticate('jwt', { session: false }), isNotUser, executer(Bookmark.delete));

export default router;
