import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'books', req),
  get: (req) => execute(API.GET, `books/${req.params.id}`, req),
  create: (req) => execute(API.POST, 'books', req),
  update: (req) => execute(API.POST, `books/${req.params.id}`, req)
}