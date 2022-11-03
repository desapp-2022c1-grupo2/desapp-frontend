import styled from 'styled-components'
import { devices } from '@util/breakpoints'

interface SidebarContainerProps { isSidebarOpen: boolean }

export const SidebarContainer = styled.div<SidebarContainerProps>`
  align-items: center;
  background-color: white;
  display: flex;
  left: ${(props) => props.isSidebarOpen ? '0' : '-100%'};
  flex-direction: column;
  justify-content: space-between;
  padding: 64px 48px 40px 48px;
  transition: 0.3s linear;

  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1200;

  ${devices.tablet} {
    width: 320px;
    left: ${(props) => props.isSidebarOpen ? '0' : '-320px'};
    box-shadow: ${(props) => props.isSidebarOpen ? 'var(--box-shadow)' : 'none'};
  }

  ${devices.desktop} {
    border-radius: 20px;
    display: flex;
    height: auto;
    left: 0 !important;
    margin: 24px 0 24px 24px;
    padding: 64px 24px 40px 24px;
    position: relative;
    width: ${(props) => props.isSidebarOpen ? '320px' : '96px'};
  }

`