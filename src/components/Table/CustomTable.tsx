import React, {useState} from 'react'
import styled from 'styled-components'
import {Input} from '../Input'
import {FieldProps} from './props'
import {
    alpha,
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Toolbar, Tooltip, Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';

import {render} from "react-dom";

type Order = 'asc' | 'desc';

const CustomTableContainer = styled(TableContainer)`
  border-radius: 20px;
`

const StyledTable = styled(Table)`
background-color: white;
`

interface TrabajoPractico {
    id: number,
    title: string,
    startDate: string, //TODO: Use date instead of string
    endDate: string, //TODO: Use date instead of string
    status: string //TODO: Create status object
    completedPercentage: number
}


function createData(
    id: number,
    title: string,
    startDate: string,
    endDate: string,
    status: string,
    completedPercentage: number
): TrabajoPractico {
    return {
        id,
        title,
        startDate,
        endDate,
        status,
        completedPercentage
    };
}

// TODO: Fix toolbar
const CustomToolbar = (numSelected: number) => {
    return (<Toolbar sx={{
        pl: {sm: 2},
        pr: {
            xs: 1,
            sm: 1
        }, ...(numSelected > 0 && {bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),}),
    }}
    >
        {numSelected > 0 ? (
            <Typography
                sx={{flex: '1 1 100%'}}
                color="inherit"
                variant="subtitle1"
                component="div">
                {numSelected} selected
            </Typography>
        ) : (
            <Typography
                sx={{flex: '1 1 100%'}}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Trabajos Practicos
            </Typography>
        )}
        {numSelected > 0 ? (
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
        ) : (
            <Tooltip title="Filter list">
                <IconButton>
                    <FilterListIcon/>
                </IconButton>
            </Tooltip>
        )}
    </Toolbar>)
}

//TODO: Implement functionality over the parameters
const CustomTableHead = (numSelected: number,
                         onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TrabajoPractico) => void,
                         order: Order,
                         orderBy: string,
                         rowCount: number) => {
    return (
        <TableHead>
            <TableRow>
                {rows.length > 0 && Object.keys(rows[1]).map(key => {
                    return (<TableCell key={key}>{key}</TableCell>);
                })}
            </TableRow>
        </TableHead>);
}

const rows = [
    createData(1, "TP1", "Wed Jul 06 2022 00:00:00 GMT-0300 (Argentina Standard Time)", "Wed Jul 06 2022 01:00:00 GMT-0300 (Argentina Standard Time)", "started", 85),
    createData(2, "TP2", "Wed Jul 08 2022 00:00:00 GMT-0300 (Argentina Standard Time)", "Wed Jul 08 2022 01:00:00 GMT-0300 (Argentina Standard Time)", "disabled", 0),
];

/*https://mui.com/material-ui/react-table/#sorting-amp-selecting*/

export const CustomTable = ({label, ...props}: FieldProps) => {
    const [selected, setSelected] = useState<number>(-1);
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof TrabajoPractico>('title');
    const isSelected = (id: number) => selected === id;
    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof TrabajoPractico,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    return (
        <>
            <CustomToolbar numSelected={selected}/>
            <CustomTableContainer>
                <StyledTable>
                    <CustomTableHead numSelected={selected}
                                     order={order}
                                     orderBy={orderBy}
                                     onRequestSort={handleRequestSort}
                                     rowCount={rows.length}/>
                    <TableBody>
                        {rows.length > 0 && rows.map(row => {
                            const isItemSelected = isSelected(row.id);
                            return (<TableRow hover
                                              onClick={(event) => setSelected(row.id)}
                                              role="checkbox"
                                              aria-checked={isItemSelected}
                                              tabIndex={-1}
                                              key={row.id}
                                              selected={isItemSelected}>
                                {Object.entries(row).map(key => {
                                    // let value = (key[1].includes("percentage")) ? key[1] + "%" : key[1]
                                    return <TableCell key={key[1]}>{key[1]}</TableCell>
                                })}
                            </TableRow>);
                        })}
                    </TableBody>
                </StyledTable>
            </CustomTableContainer>
        </>);
};