import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { devices } from '@util/breakpoints'

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  justify-content: start;
  width: 100%;
`
export const TabContainer = styled(NavLink)<{ isSidebarOpen: boolean }>`
  align-items: center;
  border-radius: 10px;
  color: var(--unahurBlack);
  display: flex;
  font-size: 1.25rem;
  gap: 8px;
  justify-content: ${(props) => props.isSidebarOpen ? '' : 'center'};
  opacity: 70%;
  padding: 12px 24px;
  width: 100%;

  &:hover {
    border: 0 !important;
    border-bottom: 0 !important;
    border-top: 0 !important;
    color: var(--unahurCyan) !important;
  }
  
  ${devices.tablet} { font-size: 1rem; }
  `
  //opacity: 40%;
export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & label {
    font-weight: 400;
    color: var(--unahurBlack);
  }

  & .active {
    background-color: var(--unahurCyanHover) !important;
    border: 0 !important;
    border-bottom: 0 !important;
    border-top: 0 !important;
    color: var(--unahurCyan) !important;
    opacity: 100%;
  }
`