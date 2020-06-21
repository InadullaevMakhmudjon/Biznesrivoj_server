import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'books', req),
  create: (req) => execute(API.POST, 'books', req),
  image: (req) => execute(API.POST, 'books/image', req)
}