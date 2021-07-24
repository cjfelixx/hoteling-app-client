import {
  LIST_RESERVATIONS,
  LIST_AVAILABLE_RESERVATIONS,
  PUSH_RESERVATION,
  CLEAR_RESERVATION,
} from './actions';

export const INITIAL_STATE = {
  reservations: []
};

const reservationReducer = (state = null, action = {}) => {
  switch (action.type) {
    case LIST_AVAILABLE_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload
      };
    case LIST_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload
      };
    case CLEAR_RESERVATION:
      return null;
    default:
      return null;
  }
};

export default reservationReducer;
