import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'orders', req),
  get: (req) => execute(API.GET, `orders/${req.params.id}`, req),
}