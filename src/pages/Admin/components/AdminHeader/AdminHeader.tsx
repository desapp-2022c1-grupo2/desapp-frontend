import React from "react"
import { IconButtonLogoUnahur } from "@assets"
import { ProfileDropdown } from "../ProfileDropdown"
import { AdminNavigation } from "../AdminNavigation"
import { AdminHeaderContainer, TopHeader } from './styles'

export const AdminHeader = () => {
  return (
    <AdminHeaderContainer position='static'>
      <TopHeader>
        <IconButtonLogoUnahur />
        <ProfileDropdown />
      </TopHeader>
      <AdminNavigation />
    </AdminHeaderContainer>
  )
}