import { ReactNode } from "react";

export interface ModalProps {
  id?: string,
  open?: boolean,
  title?: string,
  content?: ReactNode,
  footer?: ReactNode,
}

export interface ModalDialogProps {
  open?: boolean,
}