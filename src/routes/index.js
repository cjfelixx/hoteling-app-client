import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StateProvider } from '../state';
import { ROLE } from '../constants';
import reducers from '../state/reducers';
import PrivateRoute from './private-route';

import { INITIAL_STATE as AUTH_INITIAL_STATE } from '../state/auth/reducers';
import { INITIAL_STATE as RESERVATION_INITIAL_STATE } from '../state/reservation/reducers';
import { INITIAL_STATE as PROFILE_INITIAL_STATE } from '../state/profile/reducers';
import { INITIAL_STATE as WORKSPACE_INITIAL_STATE} from '../state/workspace/reducers';

import Login from '../views/login';
import Home from '../views/home';
import AdminHome from '../views/adminHome';
import Profile from '../views/profile';
import Reserve from '../views/reserve';
import Welcome from '../views/welcome';

import Content from '../components/content';
import Header from '../components/header';
import BaseStyles from './base-styles';
import { AnimatePresence } from 'framer-motion';

const Root = props => {
  const initialState = {
    auth: AUTH_INITIAL_STATE,
    reservation: RESERVATION_INITIAL_STATE,
    profile: PROFILE_INITIAL_STATE,
    workspace: WORKSPACE_INITIAL_STATE,
  };

  return (
    <StateProvider initialState={initialState} reducer={reducers}>
      <BaseStyles />
      <Router>
        <Header />
        <Content>
          <AnimatePresence exitBeforeEnter={true}>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute path="/home" roles={[ROLE.USER]} component={Home} />
              <PrivateRoute path="/profile" roles={[ROLE.USER]} component={Profile} />
              <PrivateRoute path="/reserve" roles={[ROLE.USER]} component={Reserve} />
              <PrivateRoute path="/admin" roles={[ROLE.ADMIN]} component={AdminHome} />
            </Switch>
          </AnimatePresence>
        </Content>
      </Router>
    </StateProvider>
  );
};

export default Root;
