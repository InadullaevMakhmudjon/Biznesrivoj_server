import API, { execute } from '.';

export default {
    hello: (req) => execute(API.GET, '/', req),
}