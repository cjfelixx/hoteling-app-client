import { useState } from 'react';
import { useStateValue } from '../../index';

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
  return [isLoading, error];
};

export default useAdmin;
