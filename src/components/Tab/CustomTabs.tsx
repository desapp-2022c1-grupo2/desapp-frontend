import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {CustomTable} from "../Table";
import {Link, useMatch} from "react-router-dom";
import {Paper} from "@mui/material";


export interface TabInterface {
  tabName: string,
  tabRoute: string,
}

const tabs: Array<TabInterface> = [
  {
    tabName: 'Usuarios',
    tabRoute: '/admin/users'
  },
  {
    tabName: 'Trabajos prácticos',
    tabRoute: '/admin/assignments'
  },
  {
    tabName: 'Mi Cuenta',
    tabRoute: '/admin/account'
  }
]

export const CustomTabs = () => {
  const [value, setValue] = React.useState(tabs[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: TabInterface) => {
    setValue(newValue);
  };

  // const match = useMatch();

  return (
    <Box>
      <Paper>
        <Tabs
          value={value.tabRoute}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          {tabs.map(tab => {
            return <Tab value={tab.tabName} key={tab.tabRoute} label={tab.tabName} component={Link} to={tab.tabRoute}/>
          })}
        </Tabs>
      </Paper>
    </Box>
  );
}