import api from '../../utils/api';

const basePath = '/admin';

export const loadUserProfiles = () => {
  return api
    .get(`${basePath + '/users'}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loadUserProfile = user => {
  return api
    .get(`${basePath + '/' + user.toString()}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const updateUserProfile = (user, payload) => {
  return api
    .patch(`${basePath + '/users' + user.toString()}`, payload)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const deleteUserProfile = (user, payload) => {
  return api
    .delete(`${basePath + '/users' + user.toString()}`, payload)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loadReservations = user => {
  return api
    .get(`${basePath + '/reservations'}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loadProfileReservations = user => {
  return api
    .get(`${basePath + '/' + user.toString() + '/reservations'}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const deleteReservation = reservation => {
  return api
    .delete(
      `${basePath + '/reservations/' + reservation.reservationid.toString()}`
    )
    .then(res => res.data)
    .catch(err => {
      throw err.response.data;
    });
};

export const patchReservation = (reservation, payload) => {
  return api
    .patch(
      `${basePath + '/reservations/' + reservation.reservationid.toString()}`,
      payload
    )
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loadNewBookings = () => {
  return api
    .get(`${basePath + '/new-bookings'}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loadUsersToday = () => {
  return api
    .get(`${basePath + '/users-today'}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loadWeeklyBookings = () => {
  return api
    .get(`${basePath + '/bookings-week'}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};