import { Router } from 'express';
import passport from 'passport';
import Books from '../service/bot/books';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Books.getAll));
router.get('/:id', passport.authenticate('jwt', { session: false }), executer(Books.get));
router.post('/', passport.authenticate('jwt', { session: false }), executer(Books.create));
router.post('/:id', passport.authenticate('jwt', { session: false }), executer(Books.update));

export default router;
