import React, { useState } from 'react'
import { CircularProgress } from "@mui/material"
import {
  Button,
  DeleteOutlined,
  SmallModal,
} from '@components'
import { deleteJtp } from "@services"
import { WriteModalProps } from "./WriteModalProps"

export const DeleteJtpModal = ({ jtp, id }: WriteModalProps) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => { console.log('close'); setOpen(false) }
  const handleDelete = async () => {
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
    <SmallModal
      className='modalDeleteJtp'
      onClose={handleClose}
      open={open}
      title='Eliminar Jefe de Trabajos Practicos'
      footer={
        <Button
          children={ loading ? <CircularProgress /> : "Eliminar" }
          color='unahurRed'
          onClick={handleDelete}
          variant='contained'
          title='Eliminar'
        />
      }
    >
      {
        jtp
          ? <p>Está a punto de eliminar el JTP con nombre "<b>{jtp.nombre}</b>" y con id <b>{jtp.id}</b>, este cambio es permanente</p>
          : <p>Está a punto de eliminar el JTP con id <b>{id}</b>, este cambio es permanente</p>
      }
    </SmallModal>
    </>
  )
}
