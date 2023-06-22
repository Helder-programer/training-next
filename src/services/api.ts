import axios from 'axios';
import { parseCookies } from 'nookies';
const api = axios.create({ baseURL: 'http://localhost:8000' });



api.interceptors.request.use(
    (config) => {
        const { 'next-token': token } = parseCookies();
        config.headers['next-token'] = token;
        console.log(config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;