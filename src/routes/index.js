import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StateProvider } from '../state';
import { AnimatePresence } from 'framer-motion';
import { INITIAL_STATE as AUTH_INITIAL_STATE } from '../state/auth/reducers';
import { INITIAL_STATE as RESERVATION_INITIAL_STATE } from '../state/reservation/reducers';
import { INITIAL_STATE as PROFILE_INITIAL_STATE } from '../state/profile/reducers';
import reducers from '../state/reducers';
import BaseStyles from './base-styles';
import PrivateRoute from './private-route';
import Content from '../components/content';
import Header from '../components/header';
import Login from '../views/login';
import Home from '../views/home';
import Settings from '../views/settings';
import Profile from '../views/profile';
import Reserve from '../views/reserve';
import Welcome from '../views/welcome';

const Root = (props) => {
  const initialState = {
    auth: AUTH_INITIAL_STATE,
    reservation: RESERVATION_INITIAL_STATE,
    profile: PROFILE_INITIAL_STATE,
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
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/settings" component={Settings} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/reserve" component={Reserve} />
            </Switch>
          </AnimatePresence>
        </Content>
      </Router>
    </StateProvider>
  );
};

export default Root;
