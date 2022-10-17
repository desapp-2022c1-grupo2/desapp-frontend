import styled from 'styled-components'
import { Select } from '@mui/material'

export const MuiSelect = styled(Select)`
  background-color: var(--unahurWhite);
  min-height: '52px';
  width: '100%';
  padding: '8px 16px';
`

export const SelectLabel = styled.label`
  display: block;
  text-align: left;
  width: 100%;
`

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`