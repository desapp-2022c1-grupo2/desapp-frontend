import {Dispatch, SetStateAction} from "react";

export interface TableContentProps<T> {
  rows: Array<T>;
  rowsPerPage: number;
  page: number;
  headers: string[];
  selected: number,
  setSelected: Dispatch<SetStateAction<number>>;
}
