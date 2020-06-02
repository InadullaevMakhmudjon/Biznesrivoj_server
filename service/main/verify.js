import API, { execute } from '.';

export default {
  send: (req) => execute(API.POST, 'verify/send', req),
  verify: (req) => execute(API.POST, `verify`, req),
}
