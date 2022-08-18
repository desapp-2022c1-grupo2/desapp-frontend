import {Dispatch, SetStateAction} from 'react'
import {TableProps as MuiTableProps} from '@mui/material'
import {BaseEntityAdapter} from "../../../../models/BaseEntityAdapter";

export interface TableProps<T extends BaseEntityAdapter> extends MuiTableProps {
  toolbar: JSX.Element;
  tableContent: JSX.Element;
  label: string,
  rows: Array<T>,
  rowsLength: number,
  headers: string[],
  page: number,
  setPage: Dispatch<SetStateAction<number>>;
  rowsPerPage: number,
  setRowsPerPage: Dispatch<SetStateAction<number>>;
}

export type Order = 'asc' | 'desc';

