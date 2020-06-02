import { Router } from 'express';
import passport from 'passport';
import Files from '../service/main/files';
import File from '../config/file'
import { executer, isNotUser } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Files.getAll));
router.get('/today', passport.authenticate('jwt', { session: false }), executer(Files.getToday));
router.get('/id/:id', passport.authenticate('jwt', { session: false }), executer(Files.get));
router.post('/', passport.authenticate('jwt', { session: false }), isNotUser, File.create);
router.delete('/:id', passport.authenticate('jwt', { session: false }), isNotUser, File.delete);

export default router;
