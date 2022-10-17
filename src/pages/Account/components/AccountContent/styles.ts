import styled from 'styled-components'
import { Avatar } from '@mui/material'

export const Container = styled.div`
  align-items: center;
  background-color: var(--unahurWhite);
  box-shadow: var(--box-shadow);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  justify-content: center;
  padding: 24px;
`

export const Profile = styled(Avatar)`
  height: 160px !important;
  width: 160px !important;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0;
`
