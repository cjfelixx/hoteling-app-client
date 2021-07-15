import { useState } from 'react';
import { useStateValue } from '../../index';
import { fetchAvailableReservation } from '../actions';
import { getAvailableReservations } from '../queries';

const useReserve= () => {
  const [{ auth }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const formData = async ({ values, actions }) => {
    setIsLoading(true);
    setError('');
    if (values.checkIn !== '' && values.checkOut !== '') {
      try {
        const response = await getAvailableReservations(values);
        dispatch(fetchAvailableReservation(response));
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };

  return [auth, formData, isLoading, error];
};

export default useReserve;
