import React, { useEffect } from 'react';
import { getRelativeTimeFromDate, formatDate } from '../../utils/date';
import Spinner from '../../components/spinner';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { ReserveForm } from '../../components/reservationInput';
import { Error } from '../../components/Error';
import { Container } from './components';

const Home = () => {
  const { from } = location.state || { from: { pathname: '/home' } };
  // const [auth, setReserve, isLoading, error] = useReserve();
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Container>
        {error && <Error>{error}</Error>}
        <ReserveForm onSubmit={(values, actions) => setReserve({ values, actions })}/>
      </Container>
    </motion.div>
  );
};

export default Home;
