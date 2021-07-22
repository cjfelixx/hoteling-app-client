import { useState } from 'react';
import { useStateValue } from '../..';
import { getProfileInfo, updateProfileInfo, getProfileReservations } from '../actions';
import { loadUserProfile, updateUserProfile, loadProfileReservations } from '../queries';

const useProfile = () => {
  const [{ profile }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getUser = async user => {
    setIsLoading(true);
    setError('');
    try {
      const response = await loadUserProfile(user);
      dispatch(getProfileInfo(response[0]));

      getReservationbyUser();
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const updateUser = async (user, values) => {
    setIsLoading(true);
    setError('');
 
    if (values && user) {
      try {
        const response = await updateUserProfile(user, values);
        dispatch(updateProfileInfo(response));
      } catch (err) {
        
        setError(err.message);
      }
      getUser(user);
      setIsLoading(false);
    }
  };
  const getReservationbyUser = async user => {
    setIsLoading(true);
    setError('');
    try {
      const response = await loadProfileReservations(user);
      dispatch(getProfileReservations(response));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };
  return [profile, getUser, updateUser, getReservationbyUser, isLoading, error];
};

export default useProfile;
