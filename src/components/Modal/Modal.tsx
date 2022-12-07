import React, { useEffect } from 'react'
import { ModalProps } from './props'
import {
  Backdrop,
  ModalContainer,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
} from './styles'
import {CloseButton} from "@components/Modal/CloseButton";

export const Modal = ({
  children,
  footer,
  open,
  onClose,
  title,
  ...props
} : ModalProps ) => {
  const setupModal = () => {
    if(props.className) {
      const allModals = document.getElementsByClassName(props.className)
      const root = document.getElementById('root')
      for(let modal of allModals) {
        root && root.append(modal)
      }
    }
  }

  useEffect(setupModal, [])

  return (
    <ModalDialog
      open={open}
      {...props}
    >
      <Backdrop onClick={onClose} />
      <ModalContainer>
        <ModalHeader>
          { title && <h4>{title}</h4> }
          <CloseButton onClick={onClose} />
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
        { footer && <ModalFooter>{footer}</ModalFooter> }
      </ModalContainer>
    </ModalDialog>
  )
}
