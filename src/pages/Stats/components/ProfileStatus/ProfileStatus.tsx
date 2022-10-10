import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  Badge,
  Menu,
  MenuItem
} from "@mui/material"
import { logout } from "@store/auth"
import { Avatar } from "@components"

const Name = styled.p`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  overflow:hidden;
  text-overflow: ellipsis;
  width: 132px;
  white-space: nowrap;
  `

const Rol = styled.p`font-family: 'Poppins'; font-weight: 300; font-size: 14px;`
const Container = styled.div`display: flex; gap: 8px; margin: 48px 0; width: 100%;`
const Data = styled.div`justify-content: center; display: flex; flex-direction: column; gap: 4px;`

export const ProfileStatus = ({ onlyPic }: { onlyPic: boolean}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const dispatch = useDispatch()
  const open = Boolean(anchorEl)
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
  }
  
  const handleClose = () => { setAnchorEl(null) }
  const handleLogout = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    dispatch(logout())
  }
  
  return (
    <>
    <Container>
    <Badge
      color='success'
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='dot'
      >
      <Avatar  src="https://randomuser.me/api/portraits/men/17.jpg" sx={{ width: 48, height: 48 }} />
    </Badge>
    { !onlyPic &&
      <Data>
        <Name>Usuario Administrador</Name>
        <Rol>Administrador</Rol>
      </Data>
    }
    </Container>
      
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
      }}
      transformOrigin={{
          vertical:'top',
          horizontal:'right'
      }}
    >
      <MenuItem key='logout' onClick={handleLogout}>logout</MenuItem>
    </Menu>
  </>
  )
}