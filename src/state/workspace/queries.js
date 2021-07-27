import api from '../../utils/api';

const basePath = '/admin';

export const loadWorkspaces = user => {
  return api
    .get(`${basePath + '/workspaces'}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loadProfileWorkspaces = user => {
  return api
    .get(`${basePath + '/' + user.toString() + '/workspaces'}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const createWorkspace = user => {
  return api
    .post(`${basePath + '/workspaces'}`)
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const deleteProfileWorkspace = body => {
  return api
    .delete(`${basePath + '/' + body.userid.toString() + '/workspaces/' + body.workspaceid.toString()}`)
    .then(res => res.data)
    .catch(err => {
      throw err.response.data;
    });
};

export const patchProfileReservation = (body, payload) => {
  return api
    .patch(`${basePath + '/' + body.userid.toString() + '/workspaces/' + body.workspaceid.toString()}`, payload)
    .then(res => res.data)
    .catch(err => err.response.data);
};
