import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'users', req),
  get: ({ params: { id }, ...req }) => execute(API.GET, `users/${id}`, req),
  editors: (req) => execute(API.GET,'users/editors', req),
  articles: ({ params: { id }, ...req }) => execute(API.GET, `users/${id}/articles`, req),
  bookmarks: ({ params: { id }, ...req })=> execute(API.GET, `users/${id}/bookmarks`, req),
  exists: (req) => execute(API.POST, 'users/exists', req),
  create: (req) => execute(API.POST,'users', req),
  update: ({ params: { id }, ...req }) => execute(API.POST, `users/${id}`, req),
  deleteUser: ({ params: { id }, ...req }) => execute(API.DELETE, `users/${id}`, req),
}