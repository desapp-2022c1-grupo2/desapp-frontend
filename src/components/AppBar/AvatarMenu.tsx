import { Stack, Avatar } from "@mui/material";
import React from "react";

/*
el name tendria que cambiar dinamicamente segun quien este logueado
* */


export const AvatarMenu = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={4}>
                <Avatar sx={{color: 'white'}}>
                </Avatar>
            </Stack>
        </Stack>
    )
}