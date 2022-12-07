import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { updateJtp } from '@store'
import { JtpContext, ModalContext } from '@pages/Users/Jtps/context'

export const useUpdateJtp = () => {
  const dispatch = useDispatch()
  const { closeUpdate } = useContext(ModalContext)

  const {
    isFormUncompleted,
    getJtp,
    unselect,
  } = useContext(JtpContext)

  const handleClose = () => {
    closeUpdate()
    unselect()
  }

  const handleUpdate = async () => {
    if (isFormUncompleted) return
    await enableAlert()
    handleClose()
  }

  const enableAlert = async () => {
    const jtp = getJtp()
    await toast.promise(
      jtp.patch(),
      {
        loading: <>Actualizando datos de {jtp.fullName()}...</>,
        success: <>Datos de {jtp.fullName()} actualizados con éxito</>,
        error: <>Error al modificar los datos de {jtp.fullName()}</>
      }, { id: jtp.id.toString() }
    )
    dispatch(updateJtp(jtp.json))
  }

  return {
    handleClose,
    handleUpdate,
  }
}