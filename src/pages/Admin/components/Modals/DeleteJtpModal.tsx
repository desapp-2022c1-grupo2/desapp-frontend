import React, { useState } from 'react'
import { deleteJtp } from '@store/users'
import { DeleteJtpModalProps } from "./props"
import {
  Button,
  CircularProgress,
  DeleteOutlined,
  SmallModal,
} from '@components'
import { useDispatch } from 'react-redux'

export const DeleteJtpModal = ({ jtp }: DeleteJtpModalProps) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleOpen = () => { setOpen(true) }
  const handleClose = () => { setOpen(false) }

  const handleDelete = () => {
    setLoading(true)
    dispatch(deleteJtp(jtp))
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
      <p>Está a punto de eliminar el JTP "<b>{jtp.name} {jtp.lastName}</b>", id <b>{jtp.id}</b> <br/> este cambio es permanente</p>
    </SmallModal>
    </>
  )
}
