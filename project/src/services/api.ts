import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: 'https://10.react.pages.academy/wtw',
    timeout: 5000,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (config.headers && token) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );
  return api;
};
