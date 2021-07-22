export const GET_PROFILE = 'profile/GET_PROFILE';
export const UPDATE_PROFILE = 'profile/UPDATE_PROFILE';
export const GET_PROFILE_RESERVATIONS = 'profile/GET_PROFILE_RESERVATIONS';

export const getProfileInfo = profile => ({
  type: GET_PROFILE,
  profile
});

export const updateProfileInfo = profile => ({
  type: UPDATE_PROFILE,
  profile
});

export const getProfileReservations = payload => ({
  type: GET_PROFILE_RESERVATIONS,
  payload
});
