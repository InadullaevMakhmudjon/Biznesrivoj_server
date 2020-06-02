import { Router } from 'express';
import passport from 'passport';
import Courses from '../service/courses/hello';
import { executer } from '../middlewares';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), executer(Courses.hello));

export default router;
