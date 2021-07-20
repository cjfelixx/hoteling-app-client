import React, { useState, useEffect } from 'react';
import Spinner from '../../components/spinner';
import useLoadReserve from '../../state/reservation/hooks/useLoadReserve';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import ReserveTable from '../../components/reservationTable';
import { Container, ReservationNotFound } from './components';
import Alert from '@material-ui/lab/Alert';
import * as jwt from 'jsonwebtoken';

const Home = () => {
  const accessToken = localStorage.getItem('access_token');
  const user = jwt.decode(accessToken).sub;

  const [reservations, getReservations, isLoading, error] = useLoadReserve();
  const hasReservations = reservations?.available?.length > 0;

  useEffect(() => {
    getReservations();
  }, []);
  
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Spinner show={isLoading} />
      <Container>{error && <Alert severity="error">{error}</Alert>}</Container>
      {hasReservations ? (
        <ReserveTable values={reservations} />
      ) : (
        <ReservationNotFound>No Reservations</ReservationNotFound>
      )}
    </motion.div>
  );
};

export default Home;
