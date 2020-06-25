import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'gifts', req),
  get: (req) => execute(API.GET, `gifts/${req.params.id}`, req),
  getAfford: (req) => execute(API.GET, `gifts/${req.params.point}`, req),
  create: (req) => execute(API.POST, 'gifts', req),
  update: (req) => execute(API.POST, `gifts/${req.params.id}`, req),
}