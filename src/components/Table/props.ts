import {TableHeadProps, TableProps, ToolbarProps} from "@mui/material";
import React from "react";
import {CustomToolbar} from "./CustomToolbar";


export type Order = 'asc' | 'desc';


export interface CustomToolbarProps<T> extends ToolbarProps {
  numSelected: number,
  rows: Array<T>,
  label: string,
  readOnly: boolean,
}

export interface CustomTableProps<T> extends TableProps {
  label: string,
  rows: Array<T>,
  headers: string[],
  readOnly: boolean,
}

export interface CustomTableHeadProps<T> extends TableHeadProps {
    numSelected: number,
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void,
    order: Order,
    orderBy: string,
    rowCount: number,
    headers: string[],
}
