import React, { useState } from 'react'
import { CircularProgress } from "@mui/material"
import {
  Button,
  DeleteOutlined,
  Modal,
} from '@components'
import { deleteJtp } from "@services"
import { WriteModalProps } from "./WriteModalProps"

export const DeleteJtpModal = ({ jtp, id }: WriteModalProps) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleOpen = () => {
    setOpen(true)
    const modal = document.getElementById('modalDeleteJtp')
    const root = document.getElementById('root')
    modal && root && root.append(modal)
  }
  const handleClose = () => { console.log('close'); setOpen(false) }
  const handleDelete = async () => {
    // TODO: Refrescar tabla
    setLoading(true)
    await deleteJtp(jtp ? jtp.id : id)
    setLoading(false)
    handleClose()
  }

  return (
    <>
    <Button
      children={<DeleteOutlined />}
      color='unahurRed'
      onClick={handleOpen}
      sx={{borderRadius: '50px', minHeight: 'fit-content', minWidth: 'fit-content', padding: '8px'}}
      title='Eliminar'
      variant='contained'
    />
    <Modal
      id='modalDeleteJtp'
      onClose={handleClose}
      open={open}
      title='Eliminar el jefe de trabajos practicos'
      footer={
        <>
          <Button
            color='unahurCyan'
            onClick={handleClose}
            variant='contained'
            text='Cancelar'
            title='Cancelar'
          />
          <Button
            children={ loading ? <CircularProgress /> : "Eliminar" }
            color='unahurRed'
            onClick={handleDelete}
            variant='contained'
            title='Eliminar'
          />
        </>
      }
    >
      {
        jtp
          ? <p>Está a punto de eliminar el usuario con nombre "<b>{jtp.nombre}</b>" y con id <b>{jtp.id}</b>, este cambio es permanente</p>
          : <p>Está a punto de eliminar el usuario con id <b>{id}</b>, este cambio es permanente</p>
      }
    </Modal>
    </>
  )
}
