import { Router } from 'express';
import passport from 'passport';
import Categories from '../service/main/categories';
import { executer, isNotUser } from '../middlewares';

const router = Router();
router.get('/', passport.authenticate('jwt', { session: false }), executer(Categories.getAll));
router.get('/:id/articles', passport.authenticate('jwt', { session: false }), executer(Categories.getArticles));
router.get('/:id', passport.authenticate('jwt', { session: false }), executer(Categories.get));
router.post('/', passport.authenticate('jwt', { session: false }), isNotUser, executer(Categories.create));
router.post('/:id', passport.authenticate('jwt', { session: false }), isNotUser, executer(Categories.update));
router.delete('/:id', passport.authenticate('jwt', { session: false }), isNotUser, executer(Categories.delete));

export default router;
