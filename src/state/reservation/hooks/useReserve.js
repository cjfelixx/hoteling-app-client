import { useState } from 'react';
import { useStateValue } from '../../index';
import { listAvailableReservations, pushReservation, clearReservationLoad } from '../actions';
import { loadAvailableReservations, submitReservation } from '../queries';

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

  const createReservation = async body => {
    setIsLoading(true);
    try {
      const response = await submitReservation(body);
      dispatch(pushReservation(response));
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
  }
  return [reservation, getAvailableReservations, createReservation,resetSearchResults, isLoading, error, isReserved];
};

export default useReserve;
