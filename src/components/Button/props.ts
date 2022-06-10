import {IconProps} from "@mui/material/Icon/Icon";
import {ButtonProps, Icon} from "@mui/material";
import React from "react";
import {OverridableStringUnion} from "@mui/types";
import {ButtonPropsVariantOverrides} from "@mui/material/Button/Button";

export interface CustomButtonProps extends ButtonProps {
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    value?: string,
    variant?: OverridableStringUnion<'text' | 'outlined' | 'contained',
        ButtonPropsVariantOverrides>;
}