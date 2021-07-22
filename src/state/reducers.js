import authReducer from './auth/reducers';
import reservationReducer from './reservation/reducers';
import profileReducer from './profile/reducers';

const appReducers = ({ auth, reservation, profile }, action) => ({
  auth: authReducer(auth, action),
  reservation: reservationReducer(reservation, action),
  profile: profileReducer(profile, action)
});
export default appReducers;
