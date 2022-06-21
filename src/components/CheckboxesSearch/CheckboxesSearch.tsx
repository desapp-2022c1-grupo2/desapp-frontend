import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {CheckboxesSearchProps} from "./props";
import {Field, FieldContainer} from "../Field";

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

export default function CheckboxesSearch({data, label, placeholder, ...props}: CheckboxesSearchProps) {
  return (
      <Autocomplete
        multiple
        id={"checkboxes-" + label}
        options={data}
        disableCloseOnSelect
        getOptionLabel={(option) => option.nombre}
        renderOption={(props, option, {selected}) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              checked={selected}
            />
            {option.nombre}
          </li>
        )}
        renderInput={(params) => (
          <Field {...params} label={label} placeholder={placeholder}/>
        )}
      />
  );
}