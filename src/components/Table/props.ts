import {InputProps} from "../Input"
import {TableHeadProps, ToolbarProps} from "@mui/material";
import React from "react";


export type Order = 'asc' | 'desc';


export interface CustomToolbarProps extends ToolbarProps {
    numSelected: number
}

export interface CustomTableHeadProps extends TableHeadProps {
    numSelected: number,
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TrabajoPractico) => void,
    order: Order,
    orderBy: string,
    rowCount: number
}

export interface TrabajoPractico {
    id: number,
    title: string,
    startDate: string, //TODO: Use date instead of string
    endDate: string, //TODO: Use date instead of string
    status: string //TODO: Create status object
    completedPercentage: number
}
