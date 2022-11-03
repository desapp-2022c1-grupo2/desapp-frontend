import React from "react"
import { SubMenuContainer } from './styles'
import { Tab } from './Tab'
import { TabProps } from './props'
import { ExpandMore } from "@mui/icons-material"
import { selectSidebar } from "@store"

interface SubMenuProps {
  label?: string,
  tabs: TabProps[],
}

export const SubMenu = ({
  label,
  tabs
}: SubMenuProps ) => {
  const isSidebarOpen: boolean = selectSidebar()

  return (
    <SubMenuContainer>
      {
        isSidebarOpen
          ? (
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between',}}>
              <h6>{label}</h6>
              <ExpandMore sx={{ display: 'none'}}/>
            </div>
          ) : <hr style={{ color: "var(--unahurSoftGrey)", border: '1px solid var(--unahurSoftGrey)' }}/>
      }
      { tabs.map((tab, i) => <Tab key={i} {...tab} />) }
    </SubMenuContainer>
  )
}