import React from "react"
import {MuiNavBar} from "../../components/AppBar";
import {IconButtonLogoUnahur} from "../../assets";

export const AdminPage = () => {
  return (
    <MuiNavBar pages={["Mi cuenta"]}
               icon={<IconButtonLogoUnahur/>}
               avatarSrc="https://randomuser.me/api/portraits/men/17.jpg"
               name="Diseño industrial"/>
  )
}