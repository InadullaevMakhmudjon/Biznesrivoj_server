import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'files', req),
  getToday: (req) => execute(API.GET, `files/today`, req),
  get: ({params: { id }, ...req }) => execute(API.GET, `files/id/${id}`, req),
  create: (req) => execute(API.POST, `files`, req),
  delete: ({params: { id },...req}) => execute(API.DELETE, `files/${id}`, req),
}