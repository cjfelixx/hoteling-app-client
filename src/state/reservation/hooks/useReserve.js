import { useState } from 'react';
import { useStateValue } from '../../index';
import { listAvailableReservations, pushReservation } from '../actions';
import { loadAvailableReservations, submitReservation } from '../queries';

const useReserve = () => {
  const [{ reservation }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getAvailableReservations = async body => {
    setIsLoading(true);
    setError('');

    try {
      const response = await loadAvailableReservations(body);
      dispatch(listAvailableReservations(response));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const createReservation = async body => {
    try {
      const response = await submitReservation(body);
      dispatch(pushReservation(response));
    } catch (err) {
      setError(err.message);
    }
  };
  return [reservation, getAvailableReservations, createReservation, isLoading, error];
};

export default useReserve;
