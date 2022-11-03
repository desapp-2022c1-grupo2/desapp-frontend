import { devices } from '@src/util/breakpoints'
import styled from 'styled-components'

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 90%;
  justify-content: center;

  ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 2;
    height: 80%;
  }
`

export const RequiredFieldText = styled.p`
  color: #E74924;
  margin-top: 16px;
  text-align: center;
  width: 100%;
`