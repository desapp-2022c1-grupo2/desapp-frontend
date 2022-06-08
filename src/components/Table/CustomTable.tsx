import React, {useState} from 'react'
import styled from 'styled-components'
import {FieldProps} from './props'
import {
    Box, Divider,
    IconButton, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead, TableHeadProps,
    TablePagination,
    TableRow, TableSortLabel,
    Toolbar, ToolbarProps, Tooltip, Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {visuallyHidden} from '@mui/utils';


const rows = [
    createData(1, "TP1", "05/06", "Wed Jul 06 2022 01:00:00 GMT-0300 (Argentina Standard Time)", "started", 85),
    createData(2, "TP2", "03/06", "04/06", "disabled", 0),
];

type Order = 'asc' | 'desc';

const CustomTableContainer = styled(TableContainer)`
   // display: flex;
   // flex-direction: column;
  // border-radius: 20px;
`
const StyledToolbar = styled(Toolbar)`
justify-content: space-between;
`

interface TrabajoPractico {
    id: number,
    title: string,
    startDate: string, //TODO: Use date instead of string
    endDate: string, //TODO: Use date instead of string
    status: string //TODO: Create status object
    completedPercentage: number
}

interface CustomToolbarProps extends ToolbarProps {
    numSelected: number
}

interface CustomTableHeadProps extends TableHeadProps {
    numSelected: number,
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof TrabajoPractico) => void,
    order: Order,
    orderBy: string,
    rowCount: number
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

const CustomToolbar = (props: CustomToolbarProps) => {
    let numSelected = props.numSelected
    return (<StyledToolbar>
        {numSelected > 0 ? (
            <>
                <Typography color="inherit" variant="subtitle1" component="div">
                    Seleccionado {rows[numSelected - 1].title}
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
            <Typography variant="h6" id="tableTitle" component="div">Trabajos Practicos</Typography>
        )}
    </StyledToolbar>)
}

//TODO: Implement functionality over the parameters
const CustomTableHead = (props: CustomTableHeadProps) => {
    let {onRequestSort, orderBy, order} = props;
    const createSortHandler =
        (property: keyof TrabajoPractico) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };
    return (
        <TableHead>
            <TableRow>
                {/*TODO: esto es horrible y está mal, hace falta que sea dinamico o se puede hardcodear y hacer distintas tables?*/}
                {rows.length > 0 && Object.keys(rows[1]).map(key => {
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

export const CustomTable = ({label, ...props}: FieldProps) => {
    const [selected, setSelected] = useState<number>(-1);
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof TrabajoPractico>('title');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const isSelected = (id: number) => selected === id;

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof TrabajoPractico,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    function setItemSelectedSelected(id: number) {
        setSelected((id === selected) ? -1 : id);
    }

    const handleChangePage = (event: unknown, newPage: number) => {
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
                    <CustomToolbar numSelected={selected}/>
                    <Table>
                        <CustomTableHead numSelected={selected}
                                         order={order}
                                         orderBy={orderBy}
                                         onRequestSort={handleRequestSort}
                                         rowCount={rows.length}/>
                        <TableBody>
                            {rows.length > 0 && rows.map(row => {
                                const isItemSelected = isSelected(row.id);
                                return (<TableRow hover
                                                  onClick={(event) => setItemSelectedSelected(row.id)}
                                                  role="checkbox"
                                                  aria-checked={isItemSelected}
                                                  tabIndex={-1}
                                                  key={row.id}
                                                  selected={isItemSelected}>
                                    {Object.entries(row).map(key => {
                                        let value = (key[0].toLowerCase().includes("percentage")) ? key[1] + "%" : key[1]
                                        return <TableCell key={key[1]}>{value}</TableCell>
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