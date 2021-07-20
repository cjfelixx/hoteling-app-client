import { LIST_RESERVATIONS, LIST_AVAILABLE_RESERVATIONS, PUSH_RESERVATION, CLEAR_RESERVATION } from './actions';

export const INITIAL_STATE = {
  available: []
};

const reservationReducer = (state = null, action = {}) => {
  switch (action.type) {
    case LIST_AVAILABLE_RESERVATIONS:
      return {
        ...state,
        available: action.payload
      };
    case LIST_RESERVATIONS:
      return {
        ...state,
        available: action.payload
      };
    // case PUSH_RESERVATION:
    //   return null;
    case CLEAR_RESERVATION:
      return null;
    default:
      return null;
  }
};

export default reservationReducer;
