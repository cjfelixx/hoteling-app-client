import { useState } from 'react';
import { useStateValue } from '../..';
import * as jwt from 'jsonwebtoken';

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
  const accessToken = localStorage.getItem('access_token');
  const user = jwt.decode(accessToken).sub;
  const [{ profile }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  const getUser = async () => {
    setIsLoading(true);
    setError('');
    if (user) {
      try {
        const response = await loadUserProfile(user);
        dispatch(getProfileInfo(response[0]));
        getUserReservations();
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };

  const updateUser = async values => {
    setIsUpdated(false);
    setIsLoading(true);
    setError('');

    if (values && user) {
      try {
        const response = await updateUserProfile(user, values);
        dispatch(updateProfileInfo(response));
        getUser();
        setIsUpdated(true);
      } catch (err) {
        setError(err.message);
      }
      getUser(user);
      setIsLoading(false);
    }
  };
  const getUserReservations = async () => {
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
        const response = await patchProfileReservation(reservation, updateBody);
        dispatch(updateReservationInfo(response));
        getUserReservations();
        setIsUpdated(true);
      } catch (err) {
        setError(err.message);
      }
      getUser(reservation.userId);
      setIsLoading(false);
    }
  };

  const deleteReservation = async reservation => {
    setIsUpdated(false);
    setIsLoading(true);
    setError('');

    if (reservation) {
      try {
        const response = await deleteProfileReservation(reservation);
        dispatch(deleteReservationInfo(response));
        getUserReservations();
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
    updateReservation,
    deleteReservation,
    isLoading,
    error,
    isUpdated
  ];
};

export default useProfile;
