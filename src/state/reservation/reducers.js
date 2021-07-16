import { LIST_RESERVATIONS } from './actions';

export const INITIAL_STATE = {
  available: [],
};

export default (state = null, action={}) => {
  switch (action.type) {
    case LIST_RESERVATIONS:
      return {
        ...state,
        available: action.payload,
      };
    default:
      return state;
  }
};
