import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'users', req),
  get: (req) => execute(API.GET, `users/${req.params.id}`, req),
  getGifts: (req) => execute(API.GET, `users/${req.params.id}/getGifts`, req)
}