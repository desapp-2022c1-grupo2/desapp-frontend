import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Alert, SmallModal } from '@components'
import { DeleteButton } from '@pages/Users/components'
import { useDeleteStudent } from '@pages/Users/Students/hooks'

export const DeleteStudentModal = () => {
  const {
    handleClose,
    handleDelete,
    isOpenDelete,
    selected,
  } = useDeleteStudent()

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <SmallModal
        className='modalDeleteStudent'
        onClose={() => { handleClose() }}
        open={isOpenDelete}
        title='Eliminar Jefe de Trabajos Practicos'
        footer={<DeleteButton onClick={handleDelete}/>}
      >
        <Alert severity='error' enable={true}>
          Estas a punto de eliminar el/la estudiante "<b>{selected.fullName()}</b>". <br /> Este cambio es permanente
        </Alert>
      </SmallModal>
    </>
  )
}
