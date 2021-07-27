import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useStateValue } from '../../state';
import { isTokenExpired } from '../../utils/jwt';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const [{ auth }] = useStateValue();
  const role = localStorage.getItem('role');

  return (
    <Route
      {...rest}
      render={
        props =>
          // Check if logged in
          isTokenExpired() ? (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          ) : roles && roles.indexOf(role) === -1 ? (
            <Redirect to={{ pathname: '/home' }} />
          ) : (
            <Component {...props} />
          )
        // Check if route if restricted by role
      }
    />
  );
};

export default PrivateRoute;
