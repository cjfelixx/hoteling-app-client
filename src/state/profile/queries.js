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

export const deleteProfileReservation = (reservation) => {
  return api
    .delete(`${basePath + '/' + reservation.userid.toString() + '/reservations/'+ reservation.reservationid.toString()}`)
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      throw err.response.data;
    });
};

export const patchProfileReservation = (reservation, payload) => {
  return api
    .patch(`${basePath + '/' + reservation.userid.toString() + '/reservations/'+ reservation.reservationid.toString()}`, payload)
    .then(res => res.data)
    .catch(err => err.response.data);
};
