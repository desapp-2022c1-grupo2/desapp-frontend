import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid'
import React from 'react'
//import { NewJtpModal } from '@adminPages/components/Modals'

export const MuiCustomToolbar = () => {
  return (
    <GridToolbarContainer style={{ margin: "10px" }}>
      <GridToolbarQuickFilter />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      {/*<NewJtpModal />*/}
    </GridToolbarContainer>
  );
}
