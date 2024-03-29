import styled from 'styled-components'
import { floatingCardStyles } from './props'
import { Box } from '@components'

export const FLoatingCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FloatingCardContent = styled.div<floatingCardStyles>`
  background-color: ${(props) => props.color || 'var(--unahurWhite)'};
  box-shadow: var(--box-shadow);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  height: 100%;
  width: 100%;
  & div { box-shadow: none }
`

export const FloatingCardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`
