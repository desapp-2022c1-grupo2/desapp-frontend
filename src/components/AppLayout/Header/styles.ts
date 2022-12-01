import styled from 'styled-components'
import { devices } from '@util/breakpoints'

interface headerProp { isSidebarOpen: boolean }

export const HeaderTitle = styled.h1`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.125rem;

  ${devices.tablet} { font-size: 1.5rem; }
  ${devices.desktop} { font-size: 2rem; }
`

export const HeaderContainer = styled.div<headerProp>`
  align-items: center;
  background-color: var(--unahurWhite);
  box-shadow: var(--box-shadow);
  display: flex;
  gap: 16px;
  justify-content: space-between;
  max-width: 1800px;
  padding: 16px 24px;
  position: fixed;
  transition: 0.3s linear;
  width: 100%;
  z-index: 1000;

  ${devices.desktop} {
    border-radius: 20px;
    width: ${(props) => props.isSidebarOpen ? 'calc(100vw - 344px)' : 'calc(100vw - 168px)' };
  }
`