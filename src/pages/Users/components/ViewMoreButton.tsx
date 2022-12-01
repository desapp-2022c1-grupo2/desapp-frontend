import React from "react"
import { Button, VisibilityOutlined } from "@components"
import { ButtonProps } from "@mui/material"

export const ViewMoreButton = (props: ButtonProps) => {
  return (
    <Button
      children={<VisibilityOutlined/>}
      color='unahurBlack'
      sx={{
        borderRadius: '50px',
        minHeight: 'fit-content',
        minWidth: 'fit-content',
        padding: '8px'
      }}
      title='Ver más'
      variant='contained'
      {...props}
    />
  )
}