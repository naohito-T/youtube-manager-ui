import Axios, { AxiosInstance } from 'axios';

const baseAxios = (): AxiosInstance => {
  return Axios.create({
    baseURL: `${process.env.API_URL}${process.env.PORT}`,
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
