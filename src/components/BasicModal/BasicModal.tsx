import React from "react";

import {CustomButton} from "../Button/Button";
import {Modal, Paper, Typography} from "@mui/material";
import {Clear, Delete} from "@mui/icons-material";

export const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
          <CustomButton onClick={handleOpen} color={'error'} title={'Eliminar'} endIcon={<Delete />}>Eliminar</CustomButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
              <Paper>
                  <Typography>Estas seguro de eliminar?</Typography>
                  <CustomButton onClick={handleClose} color={'info'} title={'Cancelar'} endIcon={<Clear />}>Cancelar</CustomButton>
                  <CustomButton onClick={handleClose} color={'error'} title={'Eliminar'} endIcon={<Delete />}>Eliminar</CustomButton>
              </Paper>

          </Modal>
      </div>
    );
}
