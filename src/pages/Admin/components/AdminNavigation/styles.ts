import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  margin: 16px;
  width: 100%;
`

export const Tab = styled(NavLink)`
  align-items: center;
  box-sizing: border-box;
  color: #575756;
  display: flex;
  font-size: 0.875rem;
  font-weight: 500;
  height: 79px;
  justify-content: center;
  line-height: 1.25;
  max-width: 360px;
  min-width: 90px;
  overflow: hidden;
  padding: 12px 16px;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  vertical-align: middle;
`