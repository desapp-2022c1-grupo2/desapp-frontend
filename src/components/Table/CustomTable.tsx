import React, {useState} from 'react'
import styled from 'styled-components'
import {CustomTableHeadProps, CustomToolbarProps, CustomTableProps, Order, Listable} from './props'
import {
    Box, Divider,
    IconButton, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow, TableSortLabel,
    Toolbar, Tooltip, Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {visuallyHidden} from '@mui/utils';
import {Field} from "../Field";

const CustomTableContainer = styled(TableContainer)`
   // display: flex;
   // flex-direction: column;
  // border-radius: 20px;
`
const StyledToolbar = styled(Toolbar)`
justify-content: space-between;
`

const CustomToolbar = <T extends Listable>(props: CustomToolbarProps<T>) => {
    const {numSelected, rows, label} = props;
    const row = rows[numSelected - 1];
    return (<StyledToolbar>
        {numSelected > 0 ? (
            <>
                <Typography color="inherit" variant="subtitle1" component="div">
                    Seleccionado item con id {row.id}
                </Typography>
                <Divider>
                    <Tooltip title="Editar">
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar">
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </Divider>
            </>
        ) : (
            <>
                <Typography variant="h6" id="tableTitle" component="div">{label}</Typography>
                {/*TODO: Fix search bar placement*/}
                <Field label={"Search"} variant={"search"}></Field>
            </>
        )}
    </StyledToolbar>)
}

const CustomTableHead = <T extends Listable>(props: CustomTableHeadProps<T>) => {
    let {onRequestSort, orderBy, order, headers} = props;
    const createSortHandler = (property: keyof T) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };
    return (
        <TableHead>
            <TableRow>
                {headers && headers.map(key => {
                    return (<TableCell key={key}>
                        <TableSortLabel
                            active={orderBy === key}
                            direction={orderBy === key ? order : 'asc'}
                            // TODO: Fix key used by the sort handler
                            onClick={createSortHandler(key)}>
                            {key}
                            {orderBy === key ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'descendente' : 'ascendente'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>);
                })}
            </TableRow>
        </TableHead>);
}

/*https://mui.com/material-ui/react-table/#sorting-amp-selecting*/

export const CustomTable = <T extends Listable>(props: CustomTableProps<T>) => {
    const {label, rows, headers} = props
    const [selected, setSelected] = useState<number>(-1);
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof T>('id');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const isSelected = (id: number) => selected === id;

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

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <Box>
            <Paper>
                <CustomTableContainer>
                    <CustomToolbar<T> numSelected={selected} rows={rows} label={label}/>
                    <Table>
                        <CustomTableHead<T> numSelected={selected}
                                            order={order}
                                            orderBy={orderBy as string}
                                            onRequestSort={handleRequestSort}
                                            rowCount={rows.length}
                                            headers={headers}/>
                        <TableBody>
                            {rows.length > 0 && rows
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
                                        //TODO: crear un convertidor de elementos (ej, si es lista de TP, que haga las referencias)
                                        let value = (key[0].toLowerCase().includes("percentage")) ? key[1] + "%" : key[1]
                                        return <TableCell key={value + row.id}>{value}</TableCell>
                                    })}
                                </TableRow>);
                            })}
                        </TableBody>
                    </Table>
                </CustomTableContainer>
                <TablePagination
                    labelRowsPerPage="Items por página"
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>);
};