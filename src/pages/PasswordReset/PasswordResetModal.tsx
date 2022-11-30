import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import {Alert, Button, CourseSelector, Modal} from '@components'
import { useUpdateAdmin } from '@pages/Users/Admins/hooks'
import {LockResetOutlined} from "@mui/icons-material";
import {AdminContext, ModalContext} from "@pages/Users/Admins/context";
import {usePasswordResetAdmin} from "@pages/Users/Admins/hooks/usePasswordResetAdmin";
import {usePasswordResetJtp} from "@pages/Users/Jtps/hooks/usePasswordResetJtp";
interface PasswordResetModalProps {
    role: "JTP" | "ADMIN";
}
export const PasswordResetModal = ({role}: PasswordResetModalProps) => {

    const {
        handleClose,
        handlePasswordReset,
    } = role === "ADMIN"? usePasswordResetAdmin() : usePasswordResetJtp();

    return (
        <>
            <Toaster toastOptions={{ duration: 3000 }} />
            <Button
                startIcon={<LockResetOutlined/>}
                color='unahurRed'
                text='Reestablecer contraseña'
                title='Reestablecer contraseña'
                variant='contained'
                onClick={handlePasswordReset}
            />
        </>
    )
}
