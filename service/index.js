import axios from 'axios';

export const execute = (api, method, url, { body, query, }) => new Promise((res, rej) => {
    const where = query ? Object.keys(query).map(key => `${key}=${query[key]}`).join('&') : '';
    api({
        method,
        url: `${url}?${where}`,
        data: body
    })
    .then((resp) => { res({ data: resp.data, status: resp.status }); }).catch(rej)
});

export const methods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};

export const mainEndpoint = axios.create({
    baseURL: process.env.MAIN_SERVICE_ENDPOINT || 'http://localhost:3040'
});

export const coursesEndpoint = axios.create({
    baseURL: process.env.COURSES_SERVICE_ENDPOINT || 'http://localhost:3035'
});

export const botEndpoint = axios.create({
    baseURL: process.env.BOT_SERVICE_ENDPOINT || 'http://localhost:3010'
});
