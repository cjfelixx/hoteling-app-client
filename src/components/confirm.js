import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import moment from 'moment';

const ConfirmDialog = props => {
  const { onClose, reservation, open, message } = props;
  const handleClose = () => onClose();

  const handleReserve = () => {
    onClose(reservation);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="reservation-confirm">{message}</DialogTitle>
      <DialogContent>
        <div>{`Workspace: ` + reservation.workspaceId}</div>
        <div>{`Start date: ` + moment(reservation.startDate).format('YYYY-MM-DD')}</div>
        <div>{`End date: ` + moment(reservation.endDate).format('YYYY-MM-DD')}</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>no</Button>
        <Button onClick={handleReserve} autoFocus>
          yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
