
import authReducer from './auth/reducers';
import reservationReducer from './reservation/reducers';

const appReducers = ({ auth, reservation }, action) => ({
  auth: authReducer(auth, action),
  reservation: reservationReducer(reservation, action),
});
export default appReducers;
