import React from 'react'
import { useDispatch } from 'react-redux'
import { IconButton } from '@components'
import { toggleSidebar } from '@store'
import { CloseOutlined } from '@mui/icons-material'
import { devices } from '@util/breakpoints'

import styled from 'styled-components'

const Button = styled(IconButton)`
  left: 32px!important;
  position: absolute!important;
  top: 32px!important;

  ${devices.desktop} { display: none !important;}
`

export const CrossButton = () => {
  const dispatch = useDispatch()
  const handleToggle = () => { dispatch(toggleSidebar()) }

  return (
    <Button color='unahurBlack' onClick={handleToggle}>
      <CloseOutlined />
    </Button>
  )
}