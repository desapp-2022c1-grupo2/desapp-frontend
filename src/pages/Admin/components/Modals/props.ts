import { ICourse, IJtp } from "@models"

export interface EditJtpModalProps {
  jtp: IJtp,
  courses: ICourse[],
}

export interface DeleteJtpModalProps {
  jtp: IJtp,
}

export interface NewJtpModalProps {
  id?: string | number,
  courses?: ICourse[],
}