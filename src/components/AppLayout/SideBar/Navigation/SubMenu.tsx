import React from "react"
import { SubMenuContainer } from './styles'
import { Tab } from './Tab'
import { TabProps } from './props'
import { ExpandMore } from "@mui/icons-material"

interface SubMenuProps {
  label?: string,
  open?: boolean,
  tabs: TabProps[],
}

export const SubMenu = ({
  label,
  open,
  tabs
}: SubMenuProps ) => {
  return (
    <SubMenuContainer>
      {
        open
          ? (
            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between',}}>
              <label style={{ fontFamily: 'Poppins', fontWeight: '700',fontSize: '11px', textTransform: 'uppercase'}}>{label}</label>
              <ExpandMore />
            </div>
          ) : <hr style={{ color: "var(--unahurSoftGrey)", border: '1px solid var(--unahurSoftGrey)' }}/>
      }
      { tabs.map((tab, i) => <Tab key={i} {...tab} />) }
    </SubMenuContainer>
  )
}