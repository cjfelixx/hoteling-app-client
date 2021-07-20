import React, { useState, useEffect } from 'react';
import Spinner from '../../components/spinner';
import useReserve from '../../state/reservation/hooks/useReserve';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { ReserveForm } from '../../components/reservationInput';
import ConfirmDialog from '../../components/confirm';
import Alert from '@material-ui/lab/Alert';
import * as jwt from 'jsonwebtoken';

const Home = () => {
  const accessToken = localStorage.getItem('access_token');
  const user = jwt.decode(accessToken).sub;


  


  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      {/* <Spinner show={isLoading} /> */}
      {/* <Container> */}
        {/* {error && <Alert severity="error">{error}</Alert>} */}
      {/* </Container> */}
    </motion.div>
  );
};

export default Home;
