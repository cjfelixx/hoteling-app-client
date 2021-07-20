export const LIST_RESERVATIONS = 'reservation/LIST_RESERVATIONS';
export const PUSH_RESERVATION = 'reservation/PUSH_RESERVATION';

export const listAvailableReservations = payload => ({
  type: LIST_RESERVATIONS,
  payload,
});

export const pushReservation = payload => ({
  type: PUSH_RESERVATION,
  payload,
});

