export const GET_PROFILE = 'admin/GET_PROFILE';
export const UPDATE_PROFILE = 'admin/UPDATE_PROFILE';
export const GET_PROFILE_RESERVATIONS = 'admin/GET_PROFILE_RESERVATIONS';
export const PATCH_PROFILE_RESERVATION = 'admin/PATCH_PROFILE_RESERVATION';
export const DELETE_PROFILE_RESERVATION = 'admin/DELETE_PROFILE_RESERVATION';

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
