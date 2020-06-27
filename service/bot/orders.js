import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'orders', req),
  get: (req) => execute(API.GET, `orders/${req.params.id}`, req),
  waiting: (req) => execute(API.POST, `orders/${req.params.id}/waiting`, req),
  done: (req) => execute(API.POST, `orders/${req.params.id}/done`, req),
}