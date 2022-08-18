import {Table, TableBody, TableCell, TableRow} from "@mui/material";
import React from "react";
import {BaseEntityAdapter} from "../../../../../models/BaseEntityAdapter";
import {Order} from "../props";
import {TableHead} from "../TableHead/TableHead";
import {TableContentProps} from "./props";

export const TableContent = <T extends BaseEntityAdapter>({rows, rowsPerPage, page, headers, selected, setSelected}: TableContentProps<T>) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof T>('id');
  const isSelected = (id: number) => selected === id;

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }


  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof T,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function setItemSelectedSelected(id: number) {
    setSelected((id === selected) ? -1 : id);
  }

  function getComparator<Key extends keyof T>(order: Order, orderBy: Key,): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  return (
    <Table>
      <TableHead<T> numSelected={selected} order={order} orderBy={orderBy as string} onRequestSort={handleRequestSort} rowCount={rows.length} headers={headers}/>
      <TableBody>
        {rows.length > 0 && rows
          .sort(getComparator(order, orderBy))
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
                return <TableCell key={key[0]}>{key[1]}</TableCell>
              })}
            </TableRow>);
          })}
      </TableBody>
    </Table>);

}
