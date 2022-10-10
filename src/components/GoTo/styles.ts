import styled from 'styled-components'
import { ArrowRightAltOutlined } from '@components/Icon'

export const GoToContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const ArrowRight = styled(ArrowRightAltOutlined)`
  color: var(--unahurBlack);
  font-size: 2rem !important;
`

export const ArrowLeft = styled(ArrowRightAltOutlined)`
  color: var(--unahurBlack);
  font-size: 2rem !important;
  transform: rotate(180deg);
`