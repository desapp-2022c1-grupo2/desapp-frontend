import React from "react"
import logo from "../../assets/LogoUnahur.svg"
import {
  AdminContainer,
  AdminLayout,
} from "./styles"
import {routes} from "../../router";
import {CustomTabs} from "../../components/Tab";

interface AdminPageProps {
  element: JSX.Element;
}

export const AdminPage = ({element}: AdminPageProps) => {
  return (
    <AdminLayout>
      <CustomTabs routes={routes.admin}/>
      <AdminContainer>
        {element}
      </AdminContainer>
    </AdminLayout>
  )
}