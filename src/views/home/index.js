import React, { useState } from 'react';
import Spinner from '../../components/spinner';
import useReserve from '../../state/reservation/hooks/useReserve';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { ReserveForm } from '../../components/reservationInput';
import ConfirmDialog from '../../components/confirm';
import { Error } from '../../components/Error';
import { Container, ReservationFeed, ReservationFeedItem, ReservationNotFound } from './components';

const Home = () => {
  const [Availablereservation, getAvailableReservations, createReservation, isLoading, error] = useReserve();
  const [show, showConfirm] = useState(false);
  const [reservation, setReservation] = useState({ user: null, workspaceid: null, startDate: null, endDate: null });
  const hasReservations = Availablereservation?.available?.length > 0;

  const handleSubmit = (values, action) => {
    getAvailableReservations(values);
    setReservation({ ...reservation, startDate: values.startDate, endDate: values.endDate });
  };
  const handleConfirm = reservation => {
    setReservation(reservation);
    showConfirm(true);
  };
  const handleClose = value => {
    showConfirm(false);
  };
  const handleCancel = () => {
    showConfirm(false);
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Spinner show={isLoading} />
      <Container>
        <ReserveForm onSubmit={(values, action) => handleSubmit(values, action)} />
        {error && <Error>{error}</Error>}
      </Container>
      {hasReservations ? (
        <ReservationFeed>
          {Availablereservation?.available?.map(r => (
            <ReservationFeedItem
              onClick={() => handleConfirm({ ...reservation, workspaceid: r.workspaceid })}
              key={r.workspaceid}>
              <section>
                <div className="workspace">{`Workspace ` + r.workspaceid.toString()}</div>
                <div className="description">{r.description}</div>
              </section>
            </ReservationFeedItem>
          ))}
          <ConfirmDialog open={show} onClose={handleClose} onBackdropClick={handleCancel} reservation={reservation} />
        </ReservationFeed>
      ) : (
        <ReservationNotFound> No suggestions found. </ReservationNotFound>
      )}
    </motion.div>
  );
};

export default Home;
