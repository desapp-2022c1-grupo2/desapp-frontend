import styled from 'styled-components'
import { Avatar } from '@mui/material'
import { devices } from '@util/breakpoints'

export const Container = styled.div`
  align-items: center;
  background-color: var(--unahurWhite);
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 24px;
  width: 100%;
  overflow-y: auto;

  ${devices.tablet} {
    border-radius: 20px;
  }
`

export const Profile = styled(Avatar)`
  height: 160px !important;
  width: 160px !important;
`

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0;
  width: 100%;
  max-width: 380px;
`
