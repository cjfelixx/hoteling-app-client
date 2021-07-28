import { pageTransition, pageVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router';

import { Container, BigText, Login } from './components';
import Button from "../../components/button";

const Welcome = () => {
  const history = useHistory();
  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Container>
        <BigText>"The Hoteling App"</BigText>
        <span style={{margin: "0 0 20px 0"}}>Reserve a workspace in the office:)</span>
        <Button onClick={() => history.push('/home')}>Login</Button>
      </Container>
    </motion.div>
  );
};

export default Welcome;
