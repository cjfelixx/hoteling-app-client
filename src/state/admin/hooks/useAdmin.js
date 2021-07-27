import { useState } from 'react';
import { useStateValue } from '../..';

const useAdmin = () => {
    
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  return [isLoading, error];
};

export default useAdmin;
