import React, { useEffect } from 'react';
import { getRelativeTimeFromDate, formatDate } from '../../utils/date';
import Spinner from '../../components/spinner';
import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

import { Container, Content, Heading, HeadingContainerSpaceBetween } from './components';

const Settings = () => {
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Container>
        <div className="section">
          <Heading>Settings</Heading>
        </div>
      </Container>
    </motion.div>
  );
};

export default Settings;
