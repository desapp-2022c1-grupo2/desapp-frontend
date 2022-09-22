import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  justify-content: start;

  & .active {
    background-color: var(--unahurGreenAlt) !important;
    color: var(--unahurGreen) !important;
    border: 0 !important;
    border-bottom: 0 !important;
    border-top: 0 !important;
  }
`
export const TabContainer = styled(NavLink)`
  align-items: center;
  border-radius: 10px;
  color: var(--unahurBlack);
  display: flex;
  gap: 8px;
  padding: 8px;
  width: 100%;
`