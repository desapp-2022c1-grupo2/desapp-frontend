import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Alert, SmallModal } from '@components'
import { DeleteButton } from '@pages/Users/components'
import { useDeleteAdmin } from '@pages/Users/Admins/hooks'

export const DeleteAdminModal = () => {
  const {
    handleClose,
    handleDelete,
    isOpenDelete,
    selected,
  } = useDeleteAdmin()

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <SmallModal
        className='modalDeleteAdmin'
        onClose={() => { handleClose() }}
        open={isOpenDelete}
        title='Eliminar Administrador'
        footer={<DeleteButton onClick={handleDelete}/>}
      >
        <Alert severity='error' enable={true}>
          Estas a punto de eliminar el administrador "<b>{selected.fullName()}</b>". <br /> Este cambio es permanente
        </Alert>
      </SmallModal>
    </>
  )
}
