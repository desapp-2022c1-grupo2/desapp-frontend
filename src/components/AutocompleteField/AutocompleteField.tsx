import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {AutocompleteFieldProps} from "./props";
import {Field} from "../Field";


export default function AutocompleteField({data, label, placeholder, ...props}: AutocompleteFieldProps) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data.map(v => v.nombre)}
      renderInput={(params) => <Field {...params} label={label}/>}
    />
  );
}