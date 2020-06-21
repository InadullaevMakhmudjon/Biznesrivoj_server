import { Router } from 'express';
import passport from 'passport';
import Books from '../service/bot/books';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Books.getAll));
router.post('/', passport.authenticate('jwt', { session: false }), executer(Books.create));
router.post('/image', passport.authenticate('jwt', { session: false }), executer(Books.image));

export default router;
