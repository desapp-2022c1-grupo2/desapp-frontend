import React from "react"
import {Menu, MenuItem} from "@mui/material";

export const MuiMenu  = () => {
    return(
        <div>
            <Menu open={true} id='resources-menu'>
                <MenuItem> Item 1 </MenuItem>
                <MenuItem> Item 2 </MenuItem>
            </Menu>
        </div>
    )
}