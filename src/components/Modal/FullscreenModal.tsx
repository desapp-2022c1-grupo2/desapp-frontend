import React, { useEffect } from 'react'
import { ModalProps } from './props'
import { Button } from '@components'
import {
  Backdrop,
  FullscreenModalContainer,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
} from './styles'
import { CloseOutlined } from '@mui/icons-material'
import { ButtonProps } from '@mui/material'

export const CloseButton = (props: ButtonProps) => (
  <Button color='unahurBlack' {...props}>
    <CloseOutlined />
  </Button>
)

export const FullscreenModal = ({
  children,
  footer,
  open,
  onClose,
  title,
  ...props
}: ModalProps) => {
  const setupModal = () => {
    if (props.className) {
      const allModals = document.getElementsByClassName(props.className)
      const root = document.getElementById('root')
      for (let modal of allModals) {
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
      <FullscreenModalContainer>
        <ModalHeader>
          {title && <h4>{title}</h4>}
          <CloseButton onClick={onClose} />
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </FullscreenModalContainer>
    </ModalDialog>
  )
}