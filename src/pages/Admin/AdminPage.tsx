import React from "react"
import {
  AdminContainer,
  AdminLayout,
} from "./styles"
import {routes} from "../../router";
import {CustomTabs} from "./components/Tab";
import {MuiNavBar} from "./components/AppBar";
import {IconButtonLogoUnahur} from "../../assets";

interface AdminPageProps {
  content: JSX.Element;
}

function getCurrentUserName() {
  return "Diseño industrial";
}

function getCurrentUserProfilePicture() {
  return "https://randomuser.me/api/portraits/men/17.jpg";
}

export const AdminPage = ({content}: AdminPageProps) => {
  return (
    <AdminLayout>
      {/*TODO: Actualizar dinamicamente avatar src y name*/}
      <MuiNavBar pages={["Logout"]}
                 icon={<IconButtonLogoUnahur/>}
                 avatarSrc={getCurrentUserProfilePicture()}
                 name={getCurrentUserName()}>
        <CustomTabs routes={[routes.admin.users, routes.admin.assignments, routes.admin.account]}/>
      </MuiNavBar>
      <AdminContainer>
        {content}
      </AdminContainer>
    </AdminLayout>
  )
}
