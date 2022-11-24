import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { Admin } from '@models'
import { AdminContext, ModalContext } from '@pages/Users/Admins/context'
import { postAdmin } from '@services'
import { getAdmins } from '@store'

export const useCreateAdmin = () => {
  const dispatch = useDispatch()
  
  const {
    unselect,
    getAdmin,
    isFormUncompleted,
  } = useContext(AdminContext)

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
    const admin = getAdmin()

    enableAlert(admin)
    handleClose()
  }

  const enableAlert = async (admin: Admin) => {
    await toast.promise(
      postAdmin(getAdmin().json),
      {
        loading: <>Agregando administrador {admin.fullName()}...</>,
        success: <>Administrador {admin.fullName()} agregado con éxito</>,
        error: <>Error al crear el administrador {admin.fullName()}</>
      }, { id: admin.id.toString() }
    )
    dispatch(getAdmins())
  }

  return {
    handleCreate,
    handleOpen,
    handleClose,
  }
}