export const GET_PROFILE = 'profile/GET_PROFILE';
export const UPDATE_PROFILE = 'profile/UPDATE_PROFILE';
export const GET_PROFILE_RESERVATIONS = 'profile/GET_PROFILE_RESERVATIONS';
export const PATCH_PROFILE_RESERVATION = 'reservation/PATCH_PROFILE_RESERVATION';
export const DELETE_PROFILE_RESERVATION = 'reservation/DELETE_PROFILE_RESERVATION';

export const getProfileInfo = profile => ({
  type: GET_PROFILE,
  profile
});

export const updateProfileInfo = profile => ({
  type: UPDATE_PROFILE,
  profile
});

export const getProfileReservations = reservations => ({
  type: GET_PROFILE_RESERVATIONS,
  reservations
});

export const updateReservationInfo = reservations => ({
  type: PATCH_PROFILE_RESERVATION,
  reservations
});

export const deleteReservationInfo = reservations => ({
  type: DELETE_PROFILE_RESERVATION,
  reservations
});
