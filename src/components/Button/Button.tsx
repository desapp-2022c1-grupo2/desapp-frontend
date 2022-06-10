import React from "react"
import {CustomButtonProps} from "./props";
import styled from "styled-components";
import {Button} from "@mui/material";

const StyledButton = styled(Button)`
    color:white;    
`

export const CustomButton = (props: CustomButtonProps) => {
    const {startIcon, endIcon, value, variant, ...rest} = props;
    return (<StyledButton variant={variant} startIcon={startIcon} endIcon={endIcon} {...rest}>
        {props.children}
    </StyledButton>);
}