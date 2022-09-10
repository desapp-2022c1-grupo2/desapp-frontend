import React from "react"
import { AdminNavigation, ProfileDropdown } from '@adminPages/components'
import { AdminHeaderContainer, LogoUnahur, TopHeader } from './styles'
import logoUnahur from "@assets/LogoUnahur.svg"

export const AdminHeader = () => {
  return (
    <AdminHeaderContainer position='absolute'>
      <TopHeader>
        <LogoUnahur src={logoUnahur} alt='unahur'/>
        <AdminNavigation />
        <ProfileDropdown />
      </TopHeader>
    </AdminHeaderContainer>
  )
}