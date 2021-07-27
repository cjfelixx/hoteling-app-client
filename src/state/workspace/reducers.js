import { LIST_WORKSPACE, LIST_WORKSPACES, POST_WORKSPACE, CLEAR_WORKSPACE } from './actions';

export const INITIAL_STATE = {
  workspaces: []
};

const workspaceReducer = (state = null, action = {}) => {
  switch (action.type) {
    case LIST_WORKSPACES:
      return {
        ...state,
        workspaces: action.payload
      };
    case LIST_WORKSPACE:
      return {
        ...state,
        workspaces: action.payload
      };
    case POST_WORKSPACE:
      return null;
    case CLEAR_WORKSPACE:
      return null;
    default:
      return null;
  }
};

export default workspaceReducer;
