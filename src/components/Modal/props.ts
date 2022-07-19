import {
  MouseEventHandler,
  ReactNode,
} from "react";

export interface ModalProps {
  onClose: MouseEventHandler,
  open?: boolean,
  title?: string,
  children?: ReactNode,
  footer?: ReactNode,
}

export interface ModalDialogProps {
  open?: boolean,
}
