import styled from 'styled-components'
import { devices } from '@util/breakpoints'
import { GridToolbarContainer } from '@mui/x-data-grid'

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

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & .search { width: 100% }
  ${devices.desktop} {
    width: fit-content;

    & .hideFilters { display: none }
  }
`

export const Filters = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${devices.desktop} {
    flex-direction: row;
    width: fit-content;
  }
`

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  width: 100%;

  ${devices.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }

  & div { margin: 0 !important }
  & div label { display: none !important }
`

export const ButtonsContainer = styled(GridToolbarContainer)`
  & button { width: 100% !important; }

  ${devices.tablet} {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 2;
    & button { width: fit-content !important; }
  }

  ${devices.desktop} {
    & button { width: fit-content !important; }
  }
`