import React from 'react';
import styled from 'styled-components';
import theme from './theme';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const Container = styled.div`
background-color: white;
border-radius: 10px;
width:calc(100vw - 100px);
margin-top: 50px;
@media screen and (max-width: 900px) {
    width: 100vw;
    border-radius: 0px;
  }
`;

const ReservationTable = props => {
  const { values } = props;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const hasReservations = values?.available?.length > 0;
  console.log(values);
  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Workspace</TableCell>
              <TableCell align="right"> Start Date</TableCell>
              <TableCell align="right"> End Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values?.available?.map(r => (
              <TableRow key={r.reservationid}>
                <TableCell scope="row">{r.workspaceid}</TableCell>
                <TableCell align="right"> {moment(r.startDate).format('YYYY-MM-DD')}</TableCell>
                <TableCell align="right"> {moment(r.endDate).format('YYYY-MM-DD')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ReservationTable;
