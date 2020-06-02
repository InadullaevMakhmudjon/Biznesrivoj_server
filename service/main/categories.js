import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'categories', req),
  getArticles: ({params: { id },...req}) => execute(API.GET, `categories/${id}/articles`, req),
  get: ({params: { id }, ...req }) => execute(API.GET, `categories/${id}`, req),
  create: (req) => execute(API.POST, `categories`, req),
  update: ({params: { id }, ...req}) => execute(API.POST, `categories/${id}`, req),
  delete: ({params: { id }, ...req}) => execute(API.DELETE, `categories/${id}`, req),
}