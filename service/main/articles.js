import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'articles', req),
  get: (req) => execute(API.GET, `articles/${req.params.slug}`, req),
  like: (req) => execute(API.POST, `articles/like/${req.params.id}`, req),
  create: (req) => execute(API.POST, `articles?userId=${req.user.id}`, req),
  update: (req) => execute(API.POST, `articles/${req.params.slug}`, req),
  delete: (req) => execute(API.DELETE, `articles/${req.params.slug}`, req),
}