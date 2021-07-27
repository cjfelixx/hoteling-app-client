import React, { useState, useEffect } from 'react';
import moment from 'moment';

import ConfirmDialog from './confirm';
import Alert from '@material-ui/lab/Alert';
import * as jwt from 'jsonwebtoken';
import useReserve from '../state/reservation/hooks/useReserve';

const ReserveToday = props => {
  const accessToken = localStorage.getItem('access_token');
  const user = jwt.decode(accessToken).sub;
  
  const now = new Date();
  const todayValues = { startDate: moment(now).format('YYYY/MM/DD'), endDate: moment(now).format('YYYY/MM/DD') };
  const [show, showConfirm] = useState(false);
  const [reservation, setReservation] = useState({
    userId: user,
    // reservationId: null,
    workspaceId: null,
    startDate: null,
    endDate: null
  });

  const [
    Availablereservation,
    getAvailableReservations,
    submitReservation,
    resetSearchResults,
    isLoading,
    error,
    isReserved
  ] = useReserve();

  const handleCancel = () => {
    showConfirm(false);
  };
  useEffect(() => {
    getAvailableReservations(todayValues);
  }, []);

  return <>{console.log('Availablereservation')}</>;
};

export default ReserveToday;
