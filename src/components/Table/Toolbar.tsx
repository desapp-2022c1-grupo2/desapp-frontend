import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid'
import React, { ReactNode } from 'react'

export const Toolbar = ({ readonly, addButton }: { readonly?: boolean, addButton?: ReactNode }) => {
  return (
    <GridToolbarContainer style={{ margin: "10px" }}>
      <GridToolbarQuickFilter />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      { !readonly && addButton }
    </GridToolbarContainer>
  );
}
