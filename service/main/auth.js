import API, { execute } from '.';

export default {
  getToken: (req) => execute(API.GET, `auth/login`, req),
  details: (req) => Promise.resolve({ data: req.user, status: 200 }),
  login: (req) => execute(API.POST, 'auth/login', req),
  logout: (req) => execute(API.POST, `auth/logout/${req.user.id}`, req),
}