import styled from 'styled-components'
import { containerProps } from './props'

export const ChartCard = styled.div<containerProps>`
  background-color: white;
  border: 1px solid var(--unahurGrey);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height || 'auto'};
  overflow: hidden;
  padding: 16px 24px;
  width: ${({ width }) => width || '320px'};
`

export const ChartContainer = styled.div<containerProps>`
  height: ${({ height }) => height || '360px'};
  width: 100%;
`