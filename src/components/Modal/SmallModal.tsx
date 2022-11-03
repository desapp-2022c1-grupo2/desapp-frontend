import React, { useEffect } from 'react'
import { Button } from '@components/Button'
import { ModalProps } from './props'
import {
  SmallModalContainer,
  SmallModalContent,
  ModalDialog,
  ModalFooter,
  Backdrop,
} from './styles'

export const SmallModal = ({
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
      <SmallModalContainer>
        { title && <h4>{title}</h4> }
        <SmallModalContent>
          {children}
        </SmallModalContent>
        <ModalFooter>
          <Button
            color='unahurCyan'
            onClick={onClose}
            variant='contained'
            text='Cancelar'
            title='Cancelar'
          />
          {footer}
        </ModalFooter>
      </SmallModalContainer>
    </ModalDialog>
  )
}