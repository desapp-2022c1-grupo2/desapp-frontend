import React, { useState } from 'react'
import styled from 'styled-components'
import {
  DataGrid,
  DataGridProps,
  GridColDef,
} from '@mui/x-data-grid'
import { Toolbar } from './Toolbar'
import { DataGridLocaleText } from './DataGridLocaleText'

export const TableContainer = styled.div`
  align-items: center;
  background-color: var(--unahurWhite);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 1800px;
  overflow: hidden;
  padding: 24px;
  width: 100%;
`

interface tableProps extends DataGridProps {
  handleColumns?: Function,
}

export const Table = ({
  columns,
  handleColumns,
  rows,
  ...props
}: tableProps) => {
  const [pageSize, setPageSize] = useState<number>(25)
  const col: GridColDef[] = handleColumns
    ? handleColumns()
    : columns

  const toolbar = {
    showQuickFilter: true,
    quickFilterProps: {debounceMs: 500},
  }

  return (
    <TableContainer>
      <DataGrid
        pagination={true}
        columns={col}
        components={{ Toolbar }}
        componentsProps={{ toolbar }}
        localeText={DataGridLocaleText}
        onPageSizeChange={(newPage) => setPageSize(newPage)}
        pageSize={pageSize}
        rows={rows}
        rowsPerPageOptions={[10, 25, 50]}
        sx={{border: 0}}
        {...props}
      />
    </TableContainer>
  )
}