import React from "react"
import {
  AdminContainer,
  AdminLayout,
} from "./styles"
import { AdminHeader } from "./components/AdminHeader"

interface AdminPageProps {
  content: JSX.Element;
}

export const AdminPage = ({content}: AdminPageProps) => {
  return (
    <AdminLayout>
      <AdminHeader />
      <AdminContainer>
        {content}
      </AdminContainer>
    </AdminLayout>
  )
}
