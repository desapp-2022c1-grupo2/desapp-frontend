import {TableProps} from "./props";
import React from "react";
import {TableContainer, TablePagination} from "@mui/material";
import {BaseEntityAdapter} from "../../../../models/BaseEntityAdapter";

export const Table =<T extends BaseEntityAdapter>({toolbar, tableContent, rowsLength, page, setPage, rowsPerPage, setRowsPerPage}: TableProps<T>) => {
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TableContainer>
        {toolbar}
        {tableContent}
      </TableContainer>
      <TablePagination
        labelRowsPerPage="Items por página"
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rowsLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>);
};
