import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'deliveryTypes', req),
  update: (req) => execute(API.POST, `deliveryTypes/${req.params.id}`, req)
}