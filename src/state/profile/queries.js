import api from '../../utils/api';

const basePath = '/users';
export const loadUserProfile = user => {
  return api
    .get(`${basePath + '/' + user.toString()}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const updateUserProfile = (user, payload) => {
  return api
    .patch(`${basePath + '/' + user.toString()}`, payload)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loadProfileReservations = user => {
  return api
    .get(`${basePath + '/' + user.toString() + '/reservations'}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};
