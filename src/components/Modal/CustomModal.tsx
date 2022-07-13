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
import {Modal} from "@mui/material";

export const CustomModal = ({
  content,
  footer,
  id,
  open,
  handleClose,
  title,
  ...props
} : ModalProps ) => {
  return (
    <ModalDialog id={id} open={open} {...props}>
      <ModalContainer>
        <ModalHeader>
          <GoToBack onClick={handleClose} text="Volver"/>
        </ModalHeader>
        <ModalContent>
          <h4>{title}</h4>
          {content}
        </ModalContent>
        <ModalFooter>
          {footer}
        </ModalFooter>
      </ModalContainer>
    </ModalDialog>
  )
}
