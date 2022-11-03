import React from "react"
import { Button, DeleteOutlined } from "@components"
import { ButtonProps } from "@mui/material"

export const DeleteButton = (props: ButtonProps) => {
  return (
    <Button
      children={<DeleteOutlined/>}
      color='unahurRed'
      sx={{
        borderRadius: '50px',
        minHeight: 'fit-content',
        minWidth: 'fit-content',
        padding: '8px'
      }}
      title='Eliminar'
      variant='contained'
      {...props}
    />
  )
}