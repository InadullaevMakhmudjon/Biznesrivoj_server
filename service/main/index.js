import { mainEndpoint, methods, execute as generic } from '../index';

const execute = (method, url, data) => generic(mainEndpoint, method, url, data);

export { methods as default, execute }
