import { devices } from '@src/util/breakpoints';
import styled from 'styled-components'
import { ModalDialogProps } from './props'

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1300;
`

export const ModalDialog = styled.div<ModalDialogProps>`
  align-items: center;
  background-color: #00000077;
  border: 0;
  display: ${({open}) => open ? 'flex' : 'none'};
  justify-content: center;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  trasitions: 0.5s linear;
  width: 100%;
  z-index: 1300;
`;

export const FullscreenModalContainer = styled.div`
  background-color: var(--unahurWhite);
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  width: 100%;
  z-index: 1301;
`

export const ModalContainer = styled(FullscreenModalContainer)`
  align-items: space-evenly;
  justify-content: space-evenly;
  padding: 0 16px;
  
  ${devices.tablet} {
    justify-content: space-between;
    border-radius: 20px;
    padding: 0 80px;
    height: 600px;
    text-align: left;
    width: 900px;
  }
`

export const SmallModalContainer = styled(FullscreenModalContainer)`
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  padding: 80px 80px 40px 80px;
  height: 400px;
  width: 800px;
`

export const SmallModalContent = styled.div`
  align-itemns: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  overflow: auto;
`

export const ModalContent = styled.div`
  height: 100%;
  overflow: auto;
`

export const ModalFooter = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  justify-content: center;
  padding: 24px 0;
  width: 100%;
`

export const ModalHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-beetwen;
  padding: 40px 0;
`