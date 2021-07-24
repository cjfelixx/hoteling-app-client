import { useState } from 'react';
import { useStateValue } from '../..';
import {
  getProfileInfo,
  updateProfileInfo,
  getProfileReservations,
  updateReservationInfo,
  deleteReservationInfo
} from '../actions';
import {
  loadUserProfile,
  updateUserProfile,
  loadProfileReservations,
  patchProfileReservation,
  deleteProfileReservation
} from '../queries';

const useProfile = () => {
  const [{ profile }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  const getUser = async user => {
    setIsLoading(true);
    setError('');
    if (user) {
      try {
        const response = await loadUserProfile(user);
        dispatch(getProfileInfo(response[0]));

        getReservationbyUser();
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };

  const updateUser = async (user, values) => {
    setIsUpdated(false);
    setIsLoading(true);
    setError('');

    if (values && user) {
      try {
        const response = await updateUserProfile(user, values);
        dispatch(updateProfileInfo(response));
        setIsUpdated(true);
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
    if (user) {
      try {
        const response = await loadProfileReservations(user);
        dispatch(getProfileReservations(response));
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };
  const updateReservation = async (reservation, updateBody) => {
    setIsUpdated(false);
    setIsLoading(true);
    setError('');

    if (reservation.userid && reservation.reservationid && updateBody.startDate && updateBody.endDate) {
      try {
        const response = await patchProfileReservation(reservation,updateBody);
        dispatch(updateReservationInfo(response));
        setIsUpdated(true);
      } catch (err) {
        setError(err.message);
      }
      getUser(reservation.userId);
      setIsLoading(false);
    }
  };

  const deleteReservation = async (reservation) => {
    setIsUpdated(false);
    setIsLoading(true);
    setError('');

    if (reservation) {
      try {
        const response = await deleteProfileReservation(reservation);
        dispatch(deleteReservationInfo(response));
        setIsUpdated(true);
      } catch (err) {
        setError(err.message);
      }
      getUser(reservation.userId);
      setIsLoading(false);
    }
  };
  return [
    profile,
    getUser,
    updateUser,
    getReservationbyUser,
    updateReservation,
    deleteReservation,
    isLoading,
    error,
    isUpdated
  ];
};

export default useProfile;
