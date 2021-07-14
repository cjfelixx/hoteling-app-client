import React, { useEffect } from 'react';
import Button from '../../components/button';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

import { Container, BigText } from './components';

const Home = () => {
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Container>
        <div className="section">
          <BigText>Hoteling App:)</BigText>
          <Button>Login</Button>
        </div>
      </Container>
    </motion.div>
  );
  };

export default Home;
