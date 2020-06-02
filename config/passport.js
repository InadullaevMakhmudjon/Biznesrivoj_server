import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import Users from '../service/main/users';
require('dotenv').config();

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_KEY || '1hn12jubqwd',
}, ({ userId }, callBack) => {
    Users.get({ params: {id: userId} }).then(({data}) => callBack(null, data))
    .catch((error) => callBack(error, false));
}));
