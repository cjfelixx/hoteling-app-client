import React, { useState, useEffect } from 'react';
import Spinner from '../../components/spinner';
import useReserve from '../../state/reservation/hooks/useReserve';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { ReserveForm } from '../../components/reservationInput';
import ConfirmDialog from '../../components/confirm';
import { Container, ReservationFeed, ReservationFeedItem, ReservationNotFound } from './components';
import Alert from '@material-ui/lab/Alert';
import * as jwt from 'jsonwebtoken';

const Reserve = () => {
  const accessToken = localStorage.getItem('access_token');
  const user = jwt.decode(accessToken).sub;

  const [
    Availablereservation,
    getAvailableReservations,
    createReservation,
    resetSearchResults,
    isLoading,
    error,
    isReserved
  ] = useReserve();

  useEffect(() => {
    resetSearchResults();
  }, []);

  const [show, showConfirm] = useState(false);
  const [reservation, setReservation] = useState({
    userId: user,
    // reservationId: null,
    workspaceId: null,
    startDate: null,
    endDate: null
  });
  const hasReservations = Availablereservation?.reservations?.length > 0;

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
    if (value) {
      createReservation(value);
    }
  };
  
  const handleCancel = () => {
    showConfirm(false);
  };

  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Spinner show={isLoading} />
      <Container>
        <ReserveForm onSubmit={(values, action) => handleSubmit(values, action)} />
        {error && <Alert severity="error">{error}</Alert>}
        {isReserved && <Alert severity="success"> {`Workspace Reserved:)`}</Alert>}
      </Container>
      {hasReservations ? (
        <ReservationFeed>
          {Availablereservation?.reservations?.map((r, index) => (
            <ReservationFeedItem
              onClick={() => handleConfirm({ ...reservation, workspaceId: r.workspaceid })}
              key={index}>
              <section>
                <div className="workspace">{`Workspace ` + r.workspaceid.toString()}</div>
                <div className="description">{r.description}</div>
              </section>
            </ReservationFeedItem>
          ))}
          <ConfirmDialog
            open={show}
            onClose={handleClose}
            onBackdropClick={handleCancel}
            reservation={reservation}
            message={'Do you want to reserve?'}
          />
        </ReservationFeed>
      ) : (
        <ReservationNotFound>No available workspaces.</ReservationNotFound>
      )}
    </motion.div>
  );
};

export default Reserve;
