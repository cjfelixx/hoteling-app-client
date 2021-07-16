import { useState } from 'react';
import { useStateValue } from '../../index';
import { listAvailableReservations } from '../actions';
import { loadAvailableReservations } from '../queries';

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
    }

  return [reservation, getAvailableReservations, isLoading, error];
};

export default useReserve;
