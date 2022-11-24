import React, { useEffect, useState } from 'react'
import {
  GridToolbarContainer,
  GridToolbarExport,
  DataGrid,
  DataGridProps,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid'
import { ButtonsContainer, TableContainer } from './styles'
import { Toolbar } from './Toolbar'

interface tableProps extends DataGridProps {
  handleColumns?: Function,
  buttons?: React.ReactNode,
  search?: React.ReactNode,
  filters?: React.ReactNode,
}

export const Table = ({
  buttons,
  columns,
  handleColumns,
  rows,
  search,
  filters,
  ...props
}: tableProps) => {
  const [pageSize, setPageSize] = useState<number>(25)
  const [hideFilters, setFilters] = useState<boolean>(false)

  const handleToggleFilters = () => { setFilters(!hideFilters)}

  const col: GridColDef[] = handleColumns
  ? handleColumns()
  : columns
  
  const toolbar = {
    showQuickFilter: true,
    quickFilterProps: { debounceMs: 500 },
  }

  useEffect(() => {
    try {
      const btnExport = document.getElementById('btnExport')
      if(btnExport) {
        document.getElementById('buttons')?.prepend(btnExport)
      }
    } catch (err){ console.error(err)}
    }, [rows]
  )

  const Buttons = () => (
    <ButtonsContainer>
      <GridToolbarColumnsButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport/>
      {buttons}
    </ButtonsContainer>
  )

  return (
    <>
    <TableContainer>
      <Toolbar search={search} filters={filters} handleToggleFilters={handleToggleFilters} hideFilters={hideFilters}/>
      <DataGrid
        pagination={true}
        columns={col}
        components={hideFilters ? undefined : { Toolbar: Buttons }}
        componentsProps={{ toolbar }}
        onPageSizeChange={(newPage) => setPageSize(newPage)}
        pageSize={pageSize}
        rows={rows}
        density='comfortable'
        onMenuOpen={() => {}}
        rowsPerPageOptions={[10, 25, 50]}
        sx={{ border: 0, height: '90%' }}
        {...props}
        />
    </TableContainer>
    </>
  )
}