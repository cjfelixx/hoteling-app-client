import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogContentText from '@material-ui/core/DialogContentText';

const EditDialog = props => {
  const { onClose, reservation, open, message } = props;

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleClose = () => onClose();

  const handleSubmit = (event, actions) => {
    setStartDate('');
    setEndDate('');
    onClose({ startDate: startDate, endDate: endDate });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="reservation-confirm">{message}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            required={true}
            autoFocus
            fullWidth
            value={startDate}
            margin="dense"
            id="startDate"
            type="date"
            onChange={e => setStartDate(e.target.value)}
          />
          <TextField
            required={true}
            autoFocus
            fullWidth
            value={endDate}
            margin="dense"
            id="endDate"
            type="date"
            onChange={e => setEndDate(e.target.value)}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
