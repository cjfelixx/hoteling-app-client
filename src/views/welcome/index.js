import React, { useEffect } from 'react';
import Button from '../../components/button';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';

import { Container, BigText, Login } from './components';

const Welcome = () => {
  const history = useHistory();
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Container>
        <BigText>Hoteling App:)</BigText>
        <Login onClick={() => history.push('/home')}>Login</Login>
      </Container>
    </motion.div>
  );
};

export default Welcome;
