import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FilterListIcon from '@material-ui/icons/FilterList';
import Paper from '@material-ui/core/Paper';
import ConfirmDialog from './confirm';
import EditDialog from './editDialog';

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  width: calc(100vw - 100px);
  margin-top: 50px;
  @media screen and (max-width: 900px) {
    width: 100vw;
    border-radius: 0px;
  }
`;

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

const headCells = [
  { id: 'workspaceid', main: true, disablePadding: true, label: 'Workspace' },
  { id: 'username', main: false, disablePadding: false, label: 'Reserved By' },
  { id: 'startDate', main: false, disablePadding: false, label: 'Start Date' },
  { id: 'endDate', main: false, disablePadding: false, label: 'End Date' }
];

// EnhancedTableHead.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired
// };

const EnhancedTableHead = props => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all reservations' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.main ? 'left' : 'right'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
              {orderBy === headCell.id ? (
                <span style={{ position: 'absolute', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell padding="normal" />
      </TableRow>
    </TableHead>
  );
};

const EnhancedTableToolbar = props => {
  const { numSelected } = props;

  return (
    <Toolbar>
      {numSelected > 0 ? (
        <Typography color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography variant="h6" id="tableTitle" component="div">
          Reservations
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Reject All">
          <IconButton aria-label="Reject All">
            <HighlightOffIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <></>
      )}
    </Toolbar>
  );
};
// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

const AdminReservationTable = props => {
  const { values, onUpdate, onDelete } = props;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [showDelete, setShowDelete] = React.useState(false);
  const [showEdit, setShowEdit] = React.useState(false);
  const [reservation, setReservation] = React.useState({
    userId: null,
    resrevationId: null,
    workspaceId: null,
    startDate: null,
    endDate: null
  });

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = values.map(n => n.reservationid);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);

    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleEdit = async value => {
    if (showEdit) {
      if (value) {
        await onUpdate(reservation, value);
      }
    }
    await handleCancel();
  };

  const handleDelete = async value => {
    console.log(showDelete)
    if (showDelete) {
      if (value) {
        await onDelete(value);
      }
    }
    await handleCancel();
  };

  const handleSelect = async (event, value, mode) => {
    await setReservation({ ...value });
    mode === 'delete' ? await setShowDelete(true) : await setShowEdit(true);
  };

  const handleCancel = async () => {
    await setShowDelete(false);
    await setShowEdit(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, values?.length - page * rowsPerPage);

  return (
    <Container>
      <EnhancedTableToolbar numSelected={selected.length} />
      <TableContainer component={Paper}>
        <Table>
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={values?.length}
          />

          <TableBody>
            {stableSort(values, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.reservationid);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={event => {
                      handleClick(event, row.reservationid);
                    }}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}>
                    <TableCell padding="checkbox">
                      <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.workspaceid}
                    </TableCell>
                    <TableCell align="right">{row.firstName + ' ' + row.lastName}</TableCell>
                    <TableCell align="right">{moment(row.startDate).format('YYYY-MM-DD')}</TableCell>
                    <TableCell align="right">{moment(row.endDate).format('YYYY-MM-DD')}</TableCell>
                    <TableCell align="right">
                      <IconButton aria-label="edit" onClick={event => handleSelect(event, row, 'edit')}>
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete" onClick={event => handleSelect(event, row, 'delete')}>
                        <HighlightOffIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow>
                {' '}
                style={{ height: 53 * emptyRows }}
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={values.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ConfirmDialog
        open={showDelete}
        onClose={handleDelete}
        onBackdropClick={handleCancel}
        reservation={reservation}
        message={'Are you sure to delete this reservation?'}
      />
      <EditDialog
        open={showEdit}
        onClose={handleEdit}
        onBackdropClick={handleCancel}
        reservation={reservation}
        message={'Enter new date range'}
      />
    </Container>
  );
};

export default AdminReservationTable;
