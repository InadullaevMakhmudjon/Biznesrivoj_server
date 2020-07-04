import API, { execute } from '.';

export default {
  sendMessage: (req) => execute(API.POST, 'bot/sendMessage', req),
}