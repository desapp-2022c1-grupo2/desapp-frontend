import React from "react"
import { Button, EditOutlined } from "@components"
import { ButtonProps } from "@mui/material"

export const EditButton = (props: ButtonProps) => {
  return (
    <Button
      children={<EditOutlined/>}
      color='unahurCyan'
      sx={{
        borderRadius: '50px',
        minHeight: 'fit-content',
        minWidth: 'fit-content',
        padding: '8px'
      }}
      title='Editar'
      variant='contained'
      {...props}
    />
  )
}