import {
  ICourse,
  IJtp,
} from "@models"

export interface WriteModalProps {
  id?: string | number,
  jtp?: IJtp,
  courses?: ICourse[],
}
