import React from "react"
import styled from "styled-components"
import {
  AppBar,
  Toolbar,
} from "@mui/material"
import { ProfileDropdown } from "../ProfileDropdown"
import { AdminNavigation } from "../AdminNavigation"
import { IconButtonLogoUnahur } from "@assets"

const StyledToolbar = styled(Toolbar)`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
`

export const AdminHeader = () => {
  return (
    <AppBar position='static'>
      <StyledToolbar>
        <IconButtonLogoUnahur />
        <ProfileDropdown />
      </StyledToolbar>
      <AdminNavigation />
    </AppBar>
  )
}