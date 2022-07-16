import React from "react"
import {
  AdminContainer,
  AdminLayout,
} from "./styles"
import { AdminNavigation } from "./components/AdminNavigation";
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
        <AdminNavigation />
      </MuiNavBar>
      <AdminContainer>
        {content}
      </AdminContainer>
    </AdminLayout>
  )
}
