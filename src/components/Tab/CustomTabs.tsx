import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from "react-router-dom";
import {CustomTabsProps} from "./props";
import styled from "styled-components";


const StyledTabs = styled(Tabs)`
background-color: white;
`

export const CustomTabs = ({routes, ...props}: CustomTabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledTabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary"
          aria-label="secondary tabs example">
      {Object.keys(routes).map(route => {
        return <Tab key={route} component={Link} to={routes[route].path} label={routes[route].label}></Tab>
      })}
    </StyledTabs>
  );
}