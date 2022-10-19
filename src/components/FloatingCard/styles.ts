import styled from 'styled-components'
import { floatingCardStyles } from './props'

export const FLoatingCardContainer = styled.div<floatingCardStyles>`
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.width || '100%'};
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FLoatingCardContent = styled.div<floatingCardStyles>`
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

export const FloatingCardTitle = styled.h5`
  font-family: Poppins;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
`