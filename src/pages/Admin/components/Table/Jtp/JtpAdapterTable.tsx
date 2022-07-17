import React, {useState} from 'react'
import styled from 'styled-components'
import {CustomTableHeadProps, CustomTableProps, Order} from '../props'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import {visuallyHidden} from '@mui/utils';
import {JtpAdapter} from "../../../../../models/JtpAdapter";
import {JtpToolbar} from "./JtpToolbar";

const StyledDivider = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const CustomTableHead = ({onRequestSort, orderBy, order, headers, ...props}: CustomTableHeadProps<JtpAdapter>) => {
  const createSortHandler = (property: keyof JtpAdapter) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {headers && headers.map(key => {
          return (<TableCell key={key}>
            <TableSortLabel
              active={orderBy === key}
              direction={orderBy === key ? order : 'asc'}
              // TODO: Fix key used by the sort handler
              onClick={createSortHandler(key)}>
              {key}
              {orderBy === key ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'descendente' : 'ascendente'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>);
        })}
      </TableRow>
    </TableHead>);
}


function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


/*https://mui.com/material-ui/react-table/#sorting-amp-selecting*/

export const JtpAdapterTable = ({label, rows, headers, readOnly, ...props}: CustomTableProps<JtpAdapter>) => {
  const [selected, setSelected] = useState<number>(-1);
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof JtpAdapter>('id');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const isSelected = (id: number) => selected === id;


  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof JtpAdapter,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function setItemSelectedSelected(id: number) {
    setSelected((id === selected) ? -1 : id);
  }

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  function getComparator<Key extends keyof JtpAdapter>(
    order: Order,
    orderBy: Key,
  ): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
  ) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  return (
    <>
      <TableContainer>
        <JtpToolbar readOnly={readOnly} numSelected={selected} rows={rows} label={label}/>
        <Table>
          <CustomTableHead numSelected={selected}
                              order={order}
                              orderBy={orderBy as string}
                              onRequestSort={handleRequestSort}
                              rowCount={rows.length}
                              headers={headers}/>
          <TableBody>
            {rows.length > 0 && rows.slice().sort(getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                const isItemSelected = isSelected(row.id);
                return (<TableRow hover
                                  onClick={(event) => setItemSelectedSelected(row.id)}
                                  role="checkbox"
                                  aria-checked={isItemSelected}
                                  tabIndex={-1}
                                  key={row.id}
                                  selected={isItemSelected}>
                  {Object.entries(row).map(key => {
                    //TODO: crear un convertidor de elementos (ej, si es lista de TP, que haga las referencias)
                    let value = (key[0].toLowerCase().includes("percentage")) ? key[1] + "%" : key[1]
                    return <TableCell key={key[0]}>{value}</TableCell>
                  })}
                </TableRow>);
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        labelRowsPerPage="Items por página"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>);
};
