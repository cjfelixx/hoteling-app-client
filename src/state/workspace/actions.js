export const LIST_WORKSPACES = 'WORKSPACE/LIST_WORKSPACES';
export const LIST_WORKSPACE = 'WORKSPACE/LIST_WORKSPACE';
export const POST_WORKSPACE = 'WORKSPACE/POST_WORKSPACE';
export const CLEAR_WORKSPACE = 'WORKSPACE/CLEAR_WORKSPACE'

export const listWorkspaces = () => ({
  type: LIST_WORKSPACES,
});

export const listWorkspace = payload => ({
  type: LIST_WORKSPACE,
  payload,
});

export const postWorkspace = payload => ({
  type: POST_WORKSPACE,
  payload,
});

export const clearWorkspace = () => ({
  type: CLEAR_WORKSPACE,
});
