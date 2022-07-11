import {MouseEventHandler, ReactNode} from "react";

export interface ModalProps {
  id?: string,
  open: boolean,
  handleClose: MouseEventHandler,
  title?: string,
  content?: ReactNode,
  footer?: ReactNode,
}

export interface ModalDialogProps {
  open?: boolean,
}
