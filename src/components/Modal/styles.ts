import styled from 'styled-components'
import { ModalDialogProps } from './props'

export const ModalDialog = styled.div<ModalDialogProps>`
  align-items: center;
  background-color: #00000077;
  border: 0;
  display: ${({open}) => open ? 'flex' : 'none'};
  justify-content: center;
  height: 100vh;
  position: fixed;
  trasitions: 0.5s linear;
  width: 100%;
`;

export const ModalContainer = styled.div`
  align-items: space-beetwen;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 80px;
  height: 600px;
  width: 900px;
`

export const ModalContent = styled.div``

export const ModalFooter = styled.div``

export const ModalHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-beetwen;
  padding: 40px 0;
`