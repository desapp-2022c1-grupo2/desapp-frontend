import { Stack, Avatar } from "@mui/material";
import React from "react";

/*
el name tendria que cambiar dinamicamente segun quien este logueado
* */

type AvatarProps = {
    name: string;
}

export const AvatarMenu = (props: AvatarProps ) => {
    return (
        <Stack spacing={4}>
            <Stack spacing={4}>
                <Avatar sx={{color: 'white'}}>
                    {props.name}
                </Avatar>
            </Stack>
        </Stack>
    )
}