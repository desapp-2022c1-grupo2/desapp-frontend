import React, { useState } from 'react'
import { deleteJtp } from "@services"
import { DeleteJtpModalProps } from "./props"
import {
  Button,
  CircularProgress,
  DeleteOutlined,
  SmallModal,
} from '@components'

export const DeleteJtpModal = ({ jtp, id }: DeleteJtpModalProps) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  const handleDelete = async () => {
    setLoading(true)
    let _id: number | undefined = id ? parseInt(id.toString()) : undefined
    _id = (jtp && jtp.id) || _id
    _id && await deleteJtp(_id)
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
          ? <p>Está a punto de eliminar el JTP con nombre "<b>{jtp.name} {jtp.lastName}</b>" y con id <b>{jtp.id}</b>, este cambio es permanente</p>
          : <p>Está a punto de eliminar el JTP con id <b>{id}</b>, este cambio es permanente</p>
      }
    </SmallModal>
    </>
  )
}
