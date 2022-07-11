import React, { useState } from 'react'
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
  content,
  footer,
  id,
  open,
  title,
  ...props
} : ModalProps ) => {
  const [openStatus, setOpen] = useState(open)

  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  return (
    <ModalDialog id={id} open={openStatus} {...props}>
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
