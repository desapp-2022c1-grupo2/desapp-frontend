import React from 'react'
import {
  TableHeadProps,
  TableProps,
  ToolbarProps
} from '@mui/material'
import { BaseEntityAdapter } from "../../../../models/BaseEntityAdapter";

export interface CustomToolbarProps<T extends BaseEntityAdapter> extends ToolbarProps {
  numSelected: number,
  rows: Array<T>,
  label: string,
  readOnly: boolean,
}

export interface CustomTableProps<T extends BaseEntityAdapter> extends TableProps {
  label: string,
  rows: Array<T>,
  headers: string[],
  readOnly: boolean,
}

export interface CustomTableHeadProps<T extends BaseEntityAdapter> extends TableHeadProps {
    numSelected: number,
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void,
    order: Order,
    orderBy: string,
    rowCount: number,
    headers: string[],
}

export type Order = 'asc' | 'desc';
