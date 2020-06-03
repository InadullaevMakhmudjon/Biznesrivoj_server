import { Router } from 'express';
import passport from 'passport';
import Courses from '../service/courses/courses';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Courses.getAll));

export default router;
