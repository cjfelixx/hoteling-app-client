import {
  GET_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILE_RESERVATIONS,
  PATCH_PROFILE_RESERVATION,
  DELETE_PROFILE_RESERVATION
} from './actions';

export const INITIAL_STATE = {
  userid: null,
  email: null,
  firstName: null,
  lastName: null,
  role: null,
  reservations: []
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        userid: action.profile.userid,
        email: action.profile.email,
        firstName: action.profile.firstName,
        lastName: action.profile.lastName,
        role: action.profile.role
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        email: action.profile.email,
        firstName: action.profile.firstName,
        lastName: action.profile.lastName
      };
    case GET_PROFILE_RESERVATIONS:
      return {
        ...state,
        reservations: action.reservations
      };
    case PATCH_PROFILE_RESERVATION:
      return {
        ...state,
        reservations: action.reservations
      };
    case DELETE_PROFILE_RESERVATION:
      return {
        ...state,
        reservations: action.reservations
      };
    default:
      return INITIAL_STATE;
  }
};

export default profileReducer;
