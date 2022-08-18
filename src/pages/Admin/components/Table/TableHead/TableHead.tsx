import {BaseEntityAdapter} from "../../../../../models/BaseEntityAdapter";
import React from "react";
import {Box, TableCell, TableHead as MuiTableHead, TableRow, TableSortLabel} from "@mui/material";
import {visuallyHidden} from "@mui/utils";
import {TableHeadProps} from "./props";

export const TableHead = <T extends BaseEntityAdapter>({onRequestSort, orderBy, order, headers}: TableHeadProps<T>) => {
  const createSortHandler = (property: keyof T) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  return (
    <MuiTableHead>
      <TableRow>
        {headers && headers.map(header => {
          const orderType = order === 'desc' ? 'descendente' : 'ascendente';
          return (<TableCell key={header}>
            <TableSortLabel
              active={orderBy === header}
              direction={orderBy === header ? order : 'asc'}
              // TODO: Fix key used by the sort handler
              onClick={createSortHandler(header)}>
              {header}
              {orderBy === header ? (
                <Box component="span" sx={visuallyHidden}>
                  {orderType}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>);
        })}
      </TableRow>
    </MuiTableHead>);
}
