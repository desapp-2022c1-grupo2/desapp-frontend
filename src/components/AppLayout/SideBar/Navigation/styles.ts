import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  justify-content: start;
  width: 100%;
`
export const TabContainer = styled(NavLink)`
  align-items: center;
  border-radius: 10px;
  color: var(--unahurBlack);
  display: flex;
  gap: 8px;
  opacity: 70%;
  padding: 8px 16px;
  width: 100%;

  &:hover {
    background-color: var(--unahurGreenAlt) !important;
    border: 0 !important;
    border-bottom: 0 !important;
    border-top: 0 !important;
    color: var(--unahurGreen) !important;
    opacity: 40%;
  }
`
export const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & label {
    font-weight: 400;
    color: var(--unahurBlack);
  }

  & .active {
    background-color: var(--unahurCyan) !important;
    border: 0 !important;
    border-bottom: 0 !important;
    border-top: 0 !important;
    color: var(--unahurWhite) !important;
    opacity: 100%;
  }
`