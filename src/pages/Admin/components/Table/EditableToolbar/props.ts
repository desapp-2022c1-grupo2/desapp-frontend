import {BaseEntityAdapter} from "../../../../../models/BaseEntityAdapter";
import {ToolbarProps as MuiToolbarProps} from "@mui/material/Toolbar/Toolbar";

export interface EditableToolbarProps<T extends BaseEntityAdapter> extends MuiToolbarProps {
  selected: number,
  rows: Array<T>,
  label: string,
}
