import { devices } from '@src/util/breakpoints'
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`

export const PageContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: auto;
  overflow-y: auto;
  width: 100%;

  ${devices.tablet} { padding: 0 16px 16px 16px; }
  ${devices.desktop} { padding: 24px; }
`