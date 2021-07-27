import authReducer from './auth/reducers';
import reservationReducer from './reservation/reducers';
import profileReducer from './profile/reducers';
import workspaceReducer from "./workspace/reducers";

const appReducers = ({ auth, reservation, profile, workspace }, action) => ({
  auth: authReducer(auth, action),
  reservation: reservationReducer(reservation, action),
  profile: profileReducer(profile, action),
  workspace: workspaceReducer(workspace, action),
});
export default appReducers;
