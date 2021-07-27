import { useState } from 'react';
import { useStateValue } from '../../index';
import { listWorkspaces, listWorkspace, postWorkspace, clearWorkspace } from '../actions';
import {
  loadWorkspaces,
  loadProfileWorkspaces,
  createWorkspace,
  deleteProfileWorkspace,
  patchProfileReservation
} from '../queries';

const useWorkspace = () => {
  const [{ workspace }, dispatch] = useStateValue();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isReserved, setIsReserved] = useState(false);

  const getWorkspaces = async body => {
    setIsReserved(false);
    setIsLoading(true);
    setError('');

    try {
      const response = await loadWorkspaces(body);
      dispatch(listWorkspaces(response));
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  const submitWorkspace = async body => {
    setIsLoading(true);
    try {
      await createWorkspace(body);
      getWorkspaces();
      setIsReserved(true);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  return [workspace, getWorkspaces, submitWorkspace, isLoading, error, isReserved];
};

export default useWorkspace;
