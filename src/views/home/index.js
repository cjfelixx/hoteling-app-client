import React, { useEffect } from 'react';
import Spinner from '../../components/spinner';
import useReserve from '../../state/reservation/hooks/useReserve';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { ReserveForm } from '../../components/reservationInput';
import { Error } from '../../components/Error';
import { Container, ReservationFeed, ReservationFeedItem, ReservationNotFound } from './components';

const Home = () => {
  const [reservation, getAvailableReservations, isLoading, error] = useReserve();

  const hasReservations = reservation?.available?.length > 0;
  
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Spinner show={isLoading} />
      <Container>
        <ReserveForm onSubmit={(values,actions) =>{getAvailableReservations(values)}} />
        {error && <Error>{error}</Error>}
        {hasReservations ? (
          <ReservationFeed>
            {reservation?.available?.map((r) => (
              <ReservationFeedItem key={r.workspaceid}>
                <section>
                  <div className="workspace">{r.workspaceid}</div>
                  <div className="description">{r.description}</div>
                </section>
              </ReservationFeedItem>
            ))}
          </ReservationFeed>
        ) : (
          <ReservationNotFound> No suggestions found. </ReservationNotFound>
        )}
      </Container>
    </motion.div>
  );
};

export default Home;
