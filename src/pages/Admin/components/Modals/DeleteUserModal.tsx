import React, { useState } from 'react'
import {
  Button,
  DeleteOutlined,
  Modal,
} from '@components'
import {deleteUser} from "../../../../service";
import {WriteModalProps} from "./WriteModalProps";
import {CircularProgress} from "@mui/material";

export const DeleteUserModal = ({jtp}: WriteModalProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }
  const [loading, setLoading] = useState(false);

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
            setLoading(true);
            await deleteUser(jtp.id);
            setLoading(false);
            handleClose();
          }
          } variant='contained' title='Eliminar'>
            {loading? <CircularProgress /> : "Eliminar"}
          </Button>
        </>
      }
    >
      <p>Está a punto de eliminar el usuario con nombre "<b>{jtp.nombre}</b>" y con id <b>{jtp.id}</b>, este cambio es permanente</p>
    </Modal>
    </>
  )
}
