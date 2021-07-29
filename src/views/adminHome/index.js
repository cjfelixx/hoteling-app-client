import React, { useState, useEffect } from 'react';
import Spinner from '../../components/spinner';
import useLoadReserve from "../../state/profile/hooks/useProfile";
import useReserve from "../../state/reservation/hooks/useReserve";
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import AdminReserveTable from '../../components/adminReservationTable';
import Map from '../../components/map';
import AdminStats from '../../components/adminStats';
import { ReservationNotFound } from './components';
import { loadNewBookings, loadUsersToday, loadWeeklyBookings } from '../../state/admin/queries';

const AdminHome = () => {
  const [reservations, getReservations, isLoading, error] = useLoadReserve();

  const [newBookings, setNewBookings] = useState();
  const [usersToday, setUsersToday] = useState();
  const [weeklyBookings, setWeeklyBookings] = useState();

  const numReservations = reservations?.reservations?.length;
  const numNewBookings = newBookings?.length;
  const numUsersToday = usersToday?.length;
  const numWeeklyBookings = weeklyBookings?.length;
  const hasReservations = numReservations > 0;

  const loadStats = async () => {
    setNewBookings(await loadNewBookings());
    setUsersToday(await loadUsersToday());
    setWeeklyBookings(await loadWeeklyBookings());
  };

  useEffect(() => {
    getReservations();
    loadStats();
  }, []);

  const handleEdit = async (currentReservation, value) => {
    if (currentReservation) {
      await updateReservation(currentReservation, value);
      getReservations();
    }
  };

  const handleDelete = async values => {
    if (values) {
      await deleteReservation(values);
      getReservations();
    }
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Spinner show={isLoading} />
      {/* <Map /> */}
      <AdminStats
        numNewBookings={numNewBookings}
        numUsersToday={numUsersToday}
        numTotalBookings={numReservations}
        avgWeeklyBookings={numWeeklyBookings}
      />
      {hasReservations ? (
        <AdminReserveTable values={reservations?.reservations} onUpdate={handleEdit} onDelete={handleDelete} />
      ) : (
        <ReservationNotFound>No Reservations</ReservationNotFound>
      )}
    </motion.div>
  );
};

export default AdminHome;
