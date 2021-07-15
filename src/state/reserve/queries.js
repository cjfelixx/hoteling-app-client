import axios from 'axios';
import api from '../../utils/api';

const basePath = '/reserve';

export const loadBox = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data)
    .catch((err) => err.response.data);
};

export const getAvailableReservations = (payload) => {
  return api
    .post(`${basePath}/schedule`, payload)
    .then((res) => res.data)
    .catch((err) => {
      throw err.response.data;
    });
};
