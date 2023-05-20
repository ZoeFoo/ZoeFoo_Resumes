import axios from 'axios';

const baseEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
const publicPort = process.env.NEXT_PUBLIC_API_PUBLIC_PORT;

export const jwt = (() => {
    const hasWindow = () => typeof window !== "undefined";

    const tokenKey = 'AUTH_TOKEN';
    const clear = () => hasWindow() && localStorage.removeItem(tokenKey);
    const set = (token) => hasWindow() && localStorage.setItem(tokenKey, token);
    const get = () => hasWindow() && localStorage.getItem(tokenKey);

    return {
        clear,
        set,
        get
    };
})();

export const raw = axios.create();
export const baseUrl = `${baseEndpoint}:${publicPort}`;

const instance = axios.create({
    baseURL: baseUrl,
});

instance.interceptors.request.use(
    config => {
        const token = jwt.get();

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        console.log('[AXIOS-REQUEST-ERROR]: ', error);
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    response => response,
    error => {
        console.log('[AXIOS-RESPONSE-ERROR]', error);

        if (error.response?.status === 401) {
            jwt.clear();
        }
        return error.response;
    },
);

export default instance;