import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Alert, SmallModal } from '@components'
import { DeleteButton } from '@pages/Users/components'
import { useDeleteJtp } from '@pages/Users/Jtps/hooks'

export const DeleteJtpModal = () => {
  const {
    handleClose,
    handleDelete,
    isOpenDelete,
    selected,
  } = useDeleteJtp()

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <SmallModal
        className='modalDeleteJtp'
        onClose={() => { handleClose() }}
        open={isOpenDelete}
        title='Eliminar Jefe de Trabajos Practicos'
        footer={<DeleteButton onClick={handleDelete}/>}
      >
        <Alert severity='error' enable={true}>
          Estas a punto de eliminar el/la JTP "<b>{selected.fullName()}</b>". <br /> Este cambio es permanente
        </Alert>
      </SmallModal>
    </>
  )
}
