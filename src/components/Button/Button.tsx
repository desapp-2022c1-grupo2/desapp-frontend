import React from "react"
import {CustomButtonProps} from "./props";
import styled from "styled-components";
import {Button} from "@mui/material";


export const CustomButton = ({startIcon, endIcon, color, href, variant, ...props}: CustomButtonProps) => {
    return (<Button variant={ variant || 'outlined'} startIcon={startIcon} endIcon={endIcon} color={color} href={href} {...props}>
        {props.children}
    </Button>);
}