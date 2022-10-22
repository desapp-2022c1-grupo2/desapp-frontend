import React, { useState } from 'react'
import { deleteJtp } from '@store/users'
import toast, { Toaster } from 'react-hot-toast'
import { deleteJtp as deleteJtpService } from '@services'
import {
  Button,
  CircularProgress,
  SmallModal,
} from '@components'
import { useDispatch } from 'react-redux'
import { getJtpSelected, selectDeleteJtpModal } from '@store'
import { selectJtp, setDeleteJtpModal } from '@store/modals'
import { IJtp } from '@src/models_copy'

export const DeleteJtpModal = () => {
  const dispatch = useDispatch()
  const jtp: IJtp = getJtpSelected()
  const open: boolean = selectDeleteJtpModal()
  const [loading, setLoading] = useState(false)
  
  const handleClose = () => { dispatch(setDeleteJtpModal(false)) }

  const handleDelete = () => {
    setLoading(true)
    toast.promise(
      deleteJtpService(jtp),
      {
        loading: <>Eliminando a {jtp.name} {jtp.lastName}...</>,
        success: <>Usuario ${jtp.name} ${jtp.lastName} eliminado con éxito</>,
        error: <>Error al eliminar a {jtp.name} {jtp.lastName}</>
      }, { id: jtp.id?.toString() }
    )
    dispatch(deleteJtp(jtp))
    dispatch(dispatch(selectJtp({})))
    setLoading(false)
    handleClose()
  }

  return (
    <>
    <Toaster toastOptions={{ duration: 3000}} />
    <SmallModal
      className='modalDeleteJtp'
      onClose={handleClose}
      open={open}
      title='Eliminar Jefe de Trabajos Practicos'
      footer={
        <Button
          children={ loading ? <CircularProgress /> : "Eliminar" }
          color='unahurRed'
          onClick={handleDelete}
          variant='contained'
          title='Eliminar'
        />
      }
    >
      <p>Estas a punto de eliminar el/la JTP "<b>{jtp.name} {jtp.lastName}</b>". <br/> Este cambio es permanente</p>
    </SmallModal>
    </>
  )
}
