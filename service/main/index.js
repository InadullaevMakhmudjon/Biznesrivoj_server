import axios from 'axios';

const api = axios.create({
    baseURL: process.env.MAIN_SERVICE_ENDPOINT || 'http://localhost:3040'
});

export const execute = (method, url, { body, query, }) => new Promise((res, rej) => {
    const where = query ? Object.keys(query).map(key => `${key}=${query[key]}`).join('&') : '';
    console.log('-----------------------------------------------------')
    console.log(`${url}?${where}`)
    console.log('-----------------------------------------------------')
    api({
        method,
        url: `${url}?${where}`,
        data: body
    })
    .then((resp) => {
        console.log('GOOOOOOOOOOOOOOOOOOOOOOOOODDDDDDDDDDDDd');
        res({ data: resp.data, status: resp.status });
    }).catch(rej)
});

export default {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};