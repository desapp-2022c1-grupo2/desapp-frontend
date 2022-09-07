import {
  MouseEventHandler,
  ReactNode,
} from "react";

export interface ModalProps {
  children?: ReactNode,
  className?: string,
  footer?: ReactNode,
  open?: boolean,
  title?: string,
  onClose: MouseEventHandler,
}

export interface ModalDialogProps {
  open?: boolean,
}
