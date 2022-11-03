import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid'
import { devices } from '@src/util/breakpoints'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const ToolbarContainer = styled(GridToolbarContainer)`
  margin: 16px;
  display: flex;
  flex-wrap: nowrap !important;
  flex-direction: column;
  
  & button { width: 100%; }

  ${devices.tablet} {
    flex-direction: row;
    & button { width: fit-content; }
  }

`

export const Toolbar = ({ readonly, addButton }: { readonly?: boolean, addButton?: ReactNode }) => {
  return (
    <ToolbarContainer>
      <GridToolbarQuickFilter />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      { !readonly && addButton }
    </ToolbarContainer>
  );
}
