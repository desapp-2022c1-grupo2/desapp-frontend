import React, { useState } from 'react'
import {
  Button,
  DeleteOutlined,
  Modal,
} from '@components'
import {deleteUser} from "../../../../service";
import {WriteModalProps} from "./WriteModalProps";

export const DeleteUserModal = ({jtp}: WriteModalProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  return (
    <>
    <Button
      color='unahurRed'
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
          <Button color='unahurCyan' onClick={handleClose} variant='contained' title='Cancelar'>Cancelar</Button>
          <Button color='unahurRed' onClick={async () => {
            // Borra pero no refresca la tabla
            await deleteUser(jtp.id);
            handleClose();
          }
          } variant='contained' title='Eliminar'>Eliminar</Button>
        </>
      }
    >
      <p>Está a punto de eliminar el usuario con nombre "<b>{jtp.nombre}</b>" y con id <b>{jtp.id}</b>, este cambio es permanente</p>
    </Modal>
    </>
  )
}
