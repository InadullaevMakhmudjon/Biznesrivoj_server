import API, { execute } from '.';

export default {
  getAll: (req) => execute(API.GET, 'courses', req),
}