import styled from 'styled-components'
import { ArrowRightAltOutlined } from '../Icon'

export const GoToContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const ArrowRight = styled(ArrowRightAltOutlined)`
  font-size: 2rem !important;
`

export const ArrowLeft = styled(ArrowRightAltOutlined)`
  font-size: 2rem !important;
  transform: rotate(180deg);
`