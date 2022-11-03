import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import {
  Button,
  SmallModal,
} from '@components'
import { Jtp } from '@models'
import { deleteJtp as deleteJtpService } from '@services'
import { getJtpSelected, selectDeleteJtpModal, deleteJtp, unselectJtp, setDeleteJtpModal } from '@store'

export const DeleteJtpModal = () => {
  const dispatch = useDispatch()
  const jtp = new Jtp(getJtpSelected())
  const open: boolean = selectDeleteJtpModal()
  const closeModal = () => { dispatch(setDeleteJtpModal(false)) }
  
  const enableAlert = () => {
    toast.promise(
      deleteJtpService(jtp.id),
      {
        loading: <>Eliminando a {jtp.fullName()}...</>,
        success: <>Usuario {jtp.fullName()} eliminado con éxito</>,
        error: <>Error al eliminar a {jtp.fullName()}</>
      }, { id: jtp?.id.toString() }
    )
  }

  const removeJtpSelected = () => {
    dispatch(deleteJtp(jtp.json))
    dispatch(unselectJtp())
  }

  const handleDelete = () => {
    enableAlert()
    removeJtpSelected()
    closeModal()
  }

  return (
    <>
    <Toaster toastOptions={{ duration: 3000}} />
    <SmallModal
      className='modalDeleteJtp'
      onClose={closeModal}
      open={open}
      title='Eliminar Jefe de Trabajos Practicos'
      footer={
        <Button
          children='Eliminar'
          color='unahurRed'
          onClick={handleDelete}
          variant='contained'
          title='Eliminar'
        />
      }
    >
      <p>Estas a punto de eliminar el/la JTP "<b>{jtp.fullName()}</b>". <br/> Este cambio es permanente</p>
    </SmallModal>
    </>
  )
}
