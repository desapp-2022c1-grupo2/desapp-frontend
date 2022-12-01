import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import { Alert, Modal } from '@components'
import { useCreateAdmin } from '@pages/Users/Admins/hooks'
import {
  CreateButton,
  FirstnameField,
  LastnameField,
  EmailField
} from '@pages/Users/components'
import { FieldsRow } from './styles'
import { AdminContext, ModalContext } from '../../context'

interface modalProps {
  clearSearchFilter: Function
}

export const CreateAdminModal = ({ clearSearchFilter }: modalProps) => {
  const { isOpenCreate } = useContext(ModalContext)
  const {
    email, handleEmail,
    firstname, handleFirstname,
    lastname, handleLastname,
    isFormUncompleted,
  } = useContext(AdminContext)

  const {
    handleClose,
    handleCreate,
  } = useCreateAdmin()

  return (
    <>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Modal
        onClose={handleClose}
        open={isOpenCreate}
        title='Agregar administrador'
        footer={<CreateButton disabled={isFormUncompleted} onClick={() => { clearSearchFilter(); handleCreate(); }} />}
      >
        <FirstnameField
          error={!firstname}
          onChange={handleFirstname}
          value={firstname}
        />
        <LastnameField
          error={!lastname}
          onChange={handleLastname}
          value={lastname}
        />
        <FieldsRow>
          <EmailField
            error={!email.includes('@')}
            onChange={handleEmail}
            value={email}
          />
        </FieldsRow>
        <Alert severity='error' enable={isFormUncompleted}>
          Completa todos los campos
        </Alert>
      </Modal>
    </>
  )
}
