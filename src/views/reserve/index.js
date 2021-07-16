import React, { useEffect } from 'react';
import useReserve from '../../state/reservation/hooks/useReserve';
import Spinner from '../../components/spinner';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

import { Container, ReservationFeed, ReservationFeedItem, ReservationNotFound } from './components';

const Reserve = () => {

  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      {/* <Spinner show={isLoading} /> */}
      <Container>Reserve</Container>
    </motion.div>
  );
};

export default Reserve;
