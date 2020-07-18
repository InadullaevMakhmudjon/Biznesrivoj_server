import API, { execute } from '.';

export default {
  getData: (req) => execute(API.POST, `secret/environment`, req),
}