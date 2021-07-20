import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const ConfirmDialog = props => {
  const { onClose, reservation, open } = props;
  const handleClose = () => onClose();
  const handleReserve = () => {
    onClose(reservation);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="reservation-confirm">Do you want to reserve?</DialogTitle>
      <DialogContent>
        <div>{`Workspace: ` + reservation.workspaceId}</div>
        <div>{`Start date: ` + reservation.startDate}</div>
        <div>{`End date: ` + reservation.endDate}</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          no
        </Button>
        <Button onClick={handleReserve} autoFocus>
          Reserve now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
