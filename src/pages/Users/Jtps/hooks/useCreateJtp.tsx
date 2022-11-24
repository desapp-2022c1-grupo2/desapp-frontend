import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { Jtp } from '@models'
import { JtpContext, ModalContext } from '@pages/Users/Jtps/context'
import { postJtp } from '@services'
import { getJtps } from '@store'

export const useCreateJtp = () => {
  const dispatch = useDispatch()
  
  const {
    unselect,
    getJtp,
    isFormUncompleted,
  } = useContext(JtpContext)

  const {
    closeCreate,
    openCreate,
  } = useContext(ModalContext)

  const handleOpen = () => { openCreate() }
  const handleClose = () => {
    closeCreate()
    unselect()
  }

  const handleCreate = () => {
    if (isFormUncompleted) return
    const jtp = getJtp()

    enableAlert(jtp)
    handleClose()
  }

  const enableAlert = async (jtp: Jtp) => {
    await toast.promise(
      postJtp(getJtp().json),
      {
        loading: <>Agregando al JTP {jtp.fullName()}...</>,
        success: <>JTP {jtp.fullName()} agregado con éxito</>,
        error: <>Error al crear al JTP {jtp.fullName()}</>
      }, { id: jtp.id.toString() }
    )
    dispatch(getJtps())
  }

  return {
    handleCreate,
    handleOpen,
    handleClose,
  }

}