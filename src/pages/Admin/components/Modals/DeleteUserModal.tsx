import React, { useState } from 'react'
import {
  Button,
  DeleteOutlined,
  Modal,
} from '@components'

export const DeleteUserModal = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  return (
    <>
    <Button
      color='error'
      onClick={handleOpen}
      startIcon={<DeleteOutlined />}
      variant='contained'
      title='Eliminar'
      >
      Eliminar
    </Button>
    <Modal
      onClose={handleClose}
      open={open}
      title='Eliminar Usuario'
      footer={
        <>
          <Button color='secondary' onClick={handleClose} variant='outlined' title='Cancelar'>Cancelar</Button>
          <Button color='error' onClick={handleClose} variant='contained' title='Eliminar'>Eliminar</Button>
        </>
      }
    >
      <p>Esta a punto de eliminar el usuario, Este cambio es permanente</p>
    </Modal>
    </>
  )
}
