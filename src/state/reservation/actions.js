export const LIST_AVAILABLE_RESERVATIONS = 'reservation/LIST_AVAILABLE_RESERVATIONS';
export const LIST_RESERVATIONS = 'reservation/LIST_RESERVATIONS';
export const CLEAR_RESERVATION = 'reservation/CLEAR_RESERVATION'

export const listReservations = payload => ({
  type: LIST_RESERVATIONS,
  payload,
});

export const listAvailableReservations = payload => ({
  type: LIST_AVAILABLE_RESERVATIONS,
  payload,
});



export const clearReservationLoad = () => ({
  type: CLEAR_RESERVATION,
});
