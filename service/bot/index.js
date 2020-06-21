import { botEndpoint, methods, execute as generic } from '../index';

const execute = (method, url, data) => generic(botEndpoint, method, url, data);

export { methods as default, execute }
