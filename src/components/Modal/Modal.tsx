import React from 'react'
import { ModalProps } from './props'

import {
  ModalContainer,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
} from './styles'

import { GoToBack } from '../GoTo'

export const Modal = ({
  children,
  footer,
  open,
  onClose,
  title,
  ...props
} : ModalProps ) => {
  return (
    <ModalDialog
      open={open}
      {...props}
    >
      <ModalContainer>
        <ModalHeader>
          <GoToBack onClick={onClose} text="Volver"/>
        </ModalHeader>
        <ModalContent>
          { title && <h4>{title}</h4> }
          {children}
        </ModalContent>
        { footer && <ModalFooter>{footer}</ModalFooter> }
      </ModalContainer>
    </ModalDialog>
  )
}