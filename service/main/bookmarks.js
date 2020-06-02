import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'bookmarks', req),
  get: ({params: { id }, ...req }) => execute(API.GET, `bookmarks/${id}`, req),
  getUser: ({params: { id }, ...req }) => execute(API.GET, `bookmarks/user/${id}`, req),
  getArticle: ({params: { id }, ...req }) => execute(API.GET, `bookmarks/article/${id}`, req),
  create: ({params: { id },...req}) => execute(API.POST, `bookmarks/${id}`, req),
  update: ({params: { id },...req}) => execute(API.POST, `bookmarks/${id}`, req),
  delete: ({params: { id },...req}) => execute(API.DELETE, `bookmarks/${id}`, req),
  deleteAll: (req) => execute(API.DELETE, `bookmarks`, req),
}