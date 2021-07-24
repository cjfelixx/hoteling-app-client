import React, { useEffect } from 'react';
import useLogin from '../../state/auth/hooks/useLogin';
import Spinner from '../../components/spinner';
import { Container, Error, LoginForm } from './components';
import { isTokenExpired } from '../../utils/jwt';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../../utils/motion';
import {ROLE} from "../../constants";

const Login = ({ location, history }) => {
  console.log(location)
  const { from } = location.state || { from: { pathname: '/home' } };
  const [auth, setLogin, isLoading, error] = useLogin();

  useEffect(() => {
    if (!isTokenExpired()) {
      history.push(from);
    }
  }, [auth, from, history]);

  return (
    <motion.div initial="initial" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
      <Container>
        {error && <Error>{error}</Error>}
        <h1>Login</h1>
        <Spinner show={isLoading} />
        <LoginForm onSubmit={(values, actions) => setLogin({ values, actions })} />
        {/* <Text>OR</Text> */}
        {/* <RegisterForm onSubmit={(values, actions) => setRegister({ values, actions })} /> */}
      </Container>
    </motion.div>
  );
};

export default Login;
