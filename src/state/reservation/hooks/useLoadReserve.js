import { useState } from 'react';
import { useStateValue } from '../../index';
import { listReservations } from '../actions';
import { loadReservations } from '../queries';

const useLoadReserve = () => {
  const [{ reservation }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
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
  return [reservation, getReservations, isLoading, error];
};

export default useLoadReserve;
