import React, { useState, useEffect } from 'react';
import Spinner from '../../components/spinner';
import useLoadReserve from '../../state/reservation/hooks/useLoadReserve';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import HomeReserveTable from '../../components/homeReserveTable';
import { Container, ReservationNotFound } from './components';
import Alert from '@material-ui/lab/Alert';
import ReserveToday
 from '../../components/reserveToday';
const Home = ({ history }) => {
  const [reservations, getReservations, isLoading, error] = useLoadReserve();

  const hasReservations = reservations?.reservations?.length > 0;

  useEffect(() => {
    if (localStorage.getItem('role') === 'admin') {
      history.push('/admin');
    }
    getReservations();
  }, []);

  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Spinner show={isLoading} />
      <Container>{error && <Alert severity="error">{error}</Alert>}</Container>
      {hasReservations ? (
        <HomeReserveTable values={reservations?.reservations} />
      ) : (
        <ReservationNotFound>No Reservations</ReservationNotFound>
      )}
      <ReserveToday/>
    </motion.div>
  );
};

export default Home;
