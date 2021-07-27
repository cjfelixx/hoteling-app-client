import React, { useState, useEffect } from 'react';
import Spinner from '../../components/spinner';
import useAdmin from '../../state/admin/hooks/useAdmin';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import AdminReserveTable from '../../components/adminReservationTable';
import { Container, ReservationNotFound } from './components';

const AdminHome = () => {
  // const [reservations, getReservations, isLoading, error] = useAdmin();

  // const hasReservations = reservations?.reservations?.length > 0;

  // useEffect(() => {
  //   getReservations();
  // }, []);
  // const handleEdit = async (currentReservation, value) => {
  //   if (currentReservation) {
  //     // await updateReservation(currentReservation, value);
  //     getReservations();
  //   }
  // };

  // const handleDelete = async values => {
  //   if (values) {
  //     // await deleteReservation(values);
  //     getReservations();
  //   }
  // };

  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      {/* <Spinner show={isLoading} />
      {hasReservations ? (
        <AdminReserveTable values={reservations?.reservations} onUpdate={handleEdit} onDelete={handleDelete} />
      ) : (
        <ReservationNotFound>No Reservations</ReservationNotFound>
      )} */}
    </motion.div>
  );
};

export default AdminHome;
