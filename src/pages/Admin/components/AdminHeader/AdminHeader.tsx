import React from "react"
import { IconButtonLogoUnahur } from "@assets"
import { AdminNavigation, ProfileDropdown } from '@adminPages/components'
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