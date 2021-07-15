import React, { useEffect } from 'react';
import Button from '../../components/button';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

import { Container, Heading } from './components';

const Reserve = () => {
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Container>
        <Heading>Reserve</Heading>
      </Container>
    </motion.div>
  );
};

export default Reserve;
