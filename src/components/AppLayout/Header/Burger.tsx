import React from 'react'
import { useDispatch } from 'react-redux'
import { IconButton } from '@components'
import { toggleSidebar } from '@store'
import { MenuOutlined } from '@mui/icons-material'
import { devices } from '@util/breakpoints'

import styled from 'styled-components'

const Button = styled(IconButton)`
  background-color: var(--unahurBlack) !important;
  padding: 8px!important;
  border-radius: 10px!important;
  
  ${devices.desktop} { display: none !important;}
`

export const Burger = () => {
  const dispatch = useDispatch()
  const handleToggle = () => { dispatch(toggleSidebar()) }

  return (
    <Button color='unahurWhite' onClick={handleToggle}>
      <MenuOutlined />
    </Button>
  )
}