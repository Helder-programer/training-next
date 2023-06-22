import axios from 'axios';
import { parseCookies } from 'nookies';
const api = axios.create({ baseURL: 'http://localhost:8000' });



export function getApiClient(ctx?: any) {
    const { 'next-token': token } = parseCookies(ctx);

    api.interceptors.request.use(
        (config) => {
            config.headers['next-token'] = token;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return api;


}