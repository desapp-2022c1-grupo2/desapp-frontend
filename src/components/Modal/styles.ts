import styled from 'styled-components'
import { ModalDialogProps } from './props'

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

export const ModalContainer = styled.div`
  align-items: space-beetwen;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 80px;
  height: 600px;
  text-align: left;
  width: 900px;
`

export const SmallModalContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 80px 40px 80px;
  height: 400px;
  text-align: center;
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
  gap: 0;
  justify-content: center;
  padding: 24px;
  width: 100%;
`

export const ModalHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-beetwen;
  padding: 40px 0;
`