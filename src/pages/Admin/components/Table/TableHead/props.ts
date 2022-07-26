import {BaseEntityAdapter} from "../../../../../models/BaseEntityAdapter";
import {TableHeadProps as MuiTableHeadProps} from "@mui/material/TableHead/TableHead";
import React from "react";
import {Order} from "../props";

export interface TableHeadProps<T extends BaseEntityAdapter> extends MuiTableHeadProps {
  numSelected: number,
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void,
  order: Order,
  orderBy: string,
  rowCount: number,
  headers: string[],
}
