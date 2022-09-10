import styled from 'styled-components'
import { Tab as MuiTab, Tabs } from '@mui/material'

export const TabsContainer = styled(Tabs)`
  display: flex;
  align-items: center;
  height: 80px;
  margin: 16px;
  width: 100%;
`

export const Tab = styled(MuiTab)`
  height: 79px;
`