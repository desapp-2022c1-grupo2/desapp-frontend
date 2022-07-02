import {CustomToolbarProps, Listable} from "./props";
import {ButtonGroup, Divider, InputAdornment, Toolbar, Typography} from "@mui/material";
import {Field} from "../Field";
import {Add, FilterAlt, Search} from "@mui/icons-material";
import {CustomButton} from "../Button/Button";
import EditIcon from "@mui/icons-material/Edit";
import {BasicModal} from "../BasicModal";
import React from "react";
import styled from "styled-components";

const StyledDivider = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`

const StyledToolbar = styled(Toolbar)`
display: flex;
flex-direction: column;
justify-content: center;
`

const StyledButtonGroup = styled(ButtonGroup)`
justify-content: right;
width: 100%;

`
export const CustomToolbar = <T extends Listable>({readOnly, ...props}: CustomToolbarProps<T>) => {
  const {numSelected, label} = props;
  {/*TODO: Fix search bar placement*/
  }
  return (
    <StyledToolbar>
      <StyledDivider>
        <Typography variant="h4" id={label + "Title"} component="div">{label}</Typography>
      </StyledDivider>
      <StyledDivider>
        <Field InputProps={{startAdornment: (<InputAdornment position="start"><Search/></InputAdornment>)}}
               placeholder={"Buscar"}/>
        <CustomButton color={'secondary'} title={'Filtrar'} endIcon={<FilterAlt/>}>Filtrar</CustomButton>
        <StyledButtonGroup>
          {!readOnly && numSelected > 0 &&
              <>
                  <CustomButton color={'info'} title={'Editar'} endIcon={<EditIcon/>}>Editar</CustomButton>
                {/*      TODO: Replace with modal component*/}
                  <BasicModal/>
              </>
          }
          {!readOnly && <CustomButton color={'primary'} title={'Crear'} endIcon={<Add/>} href={"admin/users/create"}>Crear</CustomButton>}
        </StyledButtonGroup>
      </StyledDivider>
    </StyledToolbar>)
}
