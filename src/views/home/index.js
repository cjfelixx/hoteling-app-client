import React, { useEffect } from 'react';
import useReserve from '../../state/reserve/hooks/useReserve';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { ReserveForm } from '../../components/reservationInput';
import { Error } from '../../components/Error';
import { Container } from './components';

const Home = () => {
  const [auth, setReserve, isLoading, error] = useReserve();
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Container>
        <ReserveForm onSubmit={(values, actions) => setReserve({ values, actions })} />
        {error && <Error>{error}</Error>}
      </Container>
    </motion.div>
  );
};

export default Home;
