import { useState } from 'react';
import { useStateValue } from '../../index';
import { listAvailableReservations, clearReservationLoad } from '../actions';
import { loadAvailableReservations, createReservation } from '../queries';

const useAdmin = () => {
  const [{ reservation }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  const getReservations = async body => {
    setIsLoading(true);
    setError('');

    try {
      const response = await loadReservations();
      dispatch(listReservations(response));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const updateReservation = async (reservation, updateBody) => {
    setIsUpdated(false);
    setIsLoading(true);
    setError('');

    if (reservation.userid && reservation.reservationid && updateBody.startDate && updateBody.endDate) {
      try {
        const response = await patchReservation(reservation, updateBody);
        dispatch(updateReservationInfo(response));
        setIsUpdated(true);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };

  const deleteReservation = async reservation => {
    setIsUpdated(false);
    setIsLoading(true);
    setError('');

    if (reservation) {
      try {
        const response = await deleteReservation(reservation);
        dispatch(deleteReservationInfo(response));
        setIsUpdated(true);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

  return [getReservations,updateReservation,deleteReservation,isLoading, error];
};

export default useAdmin;
