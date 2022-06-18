import React from "react"
import {CustomButtonProps} from "./props";
import styled from "styled-components";
import {Button} from "@mui/material";


export const CustomButton = ({startIcon, endIcon, color, ...props}: CustomButtonProps) => {
    return (<Button variant={'outlined'} startIcon={startIcon} endIcon={endIcon} color={color} >
        {props.children}
    </Button>);
}