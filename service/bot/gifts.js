import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'gifts', req),
  create: (req) => execute(API.POST, 'gifts', req)
}