import { useState } from 'react';
import { useStateValue } from '../../index';
import { listAvailableReservations, clearReservationLoad } from '../actions';
import { loadAvailableReservations, createReservation } from '../queries';

const useReserve = () => {
  const [{ reservation }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isReserved, setIsReserved] = useState(false);

  const getAvailableReservations = async body => {
    setIsReserved(false);
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

  const submitReservation = async body => {
    setIsLoading(true);
    try {
      await createReservation(body);
      setIsReserved(true);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const resetSearchResults = async () => {
    setIsLoading(true);
    dispatch(clearReservationLoad());
    setIsLoading(false);
  };

  return [reservation, getAvailableReservations, submitReservation, resetSearchResults, isLoading, error, isReserved];
};

export default useReserve;
