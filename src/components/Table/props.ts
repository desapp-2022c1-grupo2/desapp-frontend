import {TableHeadProps, TableProps, ToolbarProps} from "@mui/material";
import React from "react";


export type Order = 'asc' | 'desc';


export interface CustomToolbarProps<T extends Nameable> extends ToolbarProps {
  numSelected: number,
  rows: Array<T>,
  label: string,
  readOnly: boolean,
}

export interface CustomTableProps<T extends Nameable> extends TableProps {
  label: string,
  rows: Array<T>,
  headers: string[],
  readOnly: boolean,
}

export interface CustomTableHeadProps<T extends Nameable> extends TableHeadProps {
    numSelected: number,
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void,
    order: Order,
    orderBy: string,
    rowCount: number,
    headers: string[],
}

export interface Assignment extends Nameable {
    fechaInicio: string, //TODO: Use date instead of string
    fechaFin: string, //TODO: Use date instead of string
    estado: string
    porcentajeCompletado: number
}

export interface User extends Nameable {
  email: string
  materias: number
  trabajosPracticos: number[]
}

export interface Nameable {
  id: number,
  nombre: string,
}
