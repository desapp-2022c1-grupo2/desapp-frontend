import styled from 'styled-components'
import { Avatar } from '@mui/material'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  justify-content: center;
`

export const Profile = styled(Avatar)`
  height: 192px !important;
  width: 192px !important;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 32px 0;
`
