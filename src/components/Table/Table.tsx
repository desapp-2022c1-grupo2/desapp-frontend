import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import {
  GridToolbarContainer,
  GridToolbarExport,
  DataGrid,
  DataGridProps,
  GridColDef,
  GridToolbarQuickFilter,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid'
import { devices } from '@util/breakpoints'

export const TableContainer = styled.div`
  align-items: center;
  background-color: var(--unahurWhite);
  box-shadow: var(--box-shadow);
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 1800px;
  overflow: hidden;
  padding: 8px;
  width: 100%;

  ${devices.tablet} {
    border-radius: 20px;
    padding: 24px;
  }
`

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & .filter { display: flex; gap: 8px; }
  & div { margin: 0 !important }
  & div label { display: none !important }
`

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

  const Toolbar = () => (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport/>
      {buttons}
    </GridToolbarContainer>
  )

  return (
    <>
    <TableContainer>
      <Filters>
        <div>{search}</div>
        <div className='filter'>{filters}</div>
      </Filters>
      <DataGrid
        pagination={true}
        columns={col}
        components={{ Toolbar }}
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