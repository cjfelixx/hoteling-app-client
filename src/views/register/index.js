import React, { useEffect } from 'react';
import useLogin from '../../state/auth/hooks/useLogin';
import Spinner from '../../components/spinner';
import { Container, Error, RegisterForm } from './components';
import { isTokenExpired } from '../../utils/jwt';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../utils/motion';
const Login = ({ location, history }) => {
  const { from } = location.state || { from: { pathname: '/home' } };
  const [auth, setLogin, isLoading, error] = useLogin();

  useEffect(() => {
    if (!isTokenExpired()) {
      history.push(from);
    }
  }, [auth, from, history]);

  return (
    <motion.div transition={pageTransition} variants={pageVariants}>
      <Container>
        <h1>Register</h1>
        <Spinner show={isLoading} />
        <RegisterForm onSubmit={(values, actions) => setLogin({ values, actions })} />
        {error && <Error>{error}</Error>}
      </Container>
    </motion.div>
  );
};

export default Login;
