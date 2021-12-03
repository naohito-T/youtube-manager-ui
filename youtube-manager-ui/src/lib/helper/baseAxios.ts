import Axios, { AxiosInstance } from 'axios';

const baseAxios = (): AxiosInstance => {
  return Axios.create({
    baseURL: process.env.APP_BASE_URL,
    timeout: 1500,
  });
};

const APIWithoutToken = (): AxiosInstance => {
  const axios = baseAxios();
  axios.interceptors.request.use();
  axios.interceptors.response.use();
  return axios;
};

export { APIWithoutToken };
