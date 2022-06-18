import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {CustomTable} from "../Table";
import {Link, useMatch} from "react-router-dom";
import {Paper} from "@mui/material";
import {CustomTabsProps} from "./props";
import {routes} from "../../router";


export interface TabInterface {
  name: string,
  route: string,
}

export const CustomTabs = ({routes, ...props}: CustomTabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Paper>
        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="primary"
              aria-label="secondary tabs example">
          {Object.keys(routes).map(route => {
            return <Tab key={route} component={Link} to={routes[route].path} label={routes[route].label}></Tab>
          })}
        </Tabs>
      </Paper>
    </Box>
  );
}