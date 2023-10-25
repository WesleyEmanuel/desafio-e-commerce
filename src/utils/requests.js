import axios from 'axios';
import { DEFAULT_API_URLS } from './enum';
import { getStorage } from './localStorage';

const withBaseURLContext = () =>
  process.env.NODE_ENV
    ? DEFAULT_API_URLS[process.env.NODE_ENV.toUpperCase()]
    : DEFAULT_API_URLS.DEVELOPMENT;

const HTTPClient = axios.create({
  baseURL: withBaseURLContext()
});

HTTPClient.interceptors.request.use(
  (config) => {
    const token = getStorage('token');
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (response) => Promise.reject(response)
);

export { HTTPClient };
