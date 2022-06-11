import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {CustomTable} from "../Table";
import {Link, useMatch} from "react-router-dom";

const tabs = [{tabName: 'Usuarios', tabRoute: '/usuarios'}, {
  tabName: 'Trabajos prácticos',
  tabRoute: '/trabajosPracticos'
}, {tabName: 'Mi Cuenta', tabRoute: '/cuenta'}]

export const CustomTabs = () => {
  const [value, setValue] = React.useState(tabs[0]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // const match = useMatch();

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {tabs.map(tab => {
          return <Tab value={tab.tabName} key={tab.tabRoute} label={tab.tabName} component={Link}
                      to={"/admin" + tab.tabRoute}/>
        })}
      </Tabs>
    </Box>
  );
}