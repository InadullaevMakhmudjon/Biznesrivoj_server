import { coursesEndpoint, methods, execute as generic } from '../index';

const execute = (method, url, data) => generic(coursesEndpoint, method, url, data);

export { methods as default, execute }
