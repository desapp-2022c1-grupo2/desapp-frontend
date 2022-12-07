import {Button, ButtonProps} from "@components";
import {CloseOutlined} from "@mui/icons-material";
import React from "react";

export const CloseButton = (props: ButtonProps) => (
    <Button color='unahurBlack' sx={{ width: 'fit-content' }}{...props}>
        <CloseOutlined />
    </Button>
)
