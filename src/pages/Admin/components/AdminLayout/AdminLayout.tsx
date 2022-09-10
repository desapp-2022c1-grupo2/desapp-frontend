import React from "react"
import { AdminHeader } from "@adminPages/components"
import { AdminContent, AdminLayoutContainer } from "./styles"
import { AdminLayoutProps } from './props'

export const AdminLayout = ({ content }: AdminLayoutProps) => {
  return (
    <AdminLayoutContainer>
      <AdminHeader />
      <AdminContent>
        {content}
      </AdminContent>
    </AdminLayoutContainer>
  )
}
