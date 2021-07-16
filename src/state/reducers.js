
import authReducer from './auth/reducers';
import reservationReducer from './reservation/reducers';

export default ({ auth, reservation }, action) => ({
  auth: authReducer(auth, action),
  reservation: reservationReducer(reservation, action),
});
