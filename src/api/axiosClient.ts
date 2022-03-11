import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://opentdb.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
