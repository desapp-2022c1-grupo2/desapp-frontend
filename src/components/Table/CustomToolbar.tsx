import {CustomToolbarProps, Nameable} from "./props";
import {ButtonGroup, InputAdornment, Toolbar, Typography} from "@mui/material";
import {Field} from "../Field";
import {Add, Delete, FilterAlt, Search, Edit} from "@mui/icons-material";
import {CustomButton} from "../Button";
import React, {useState} from "react";
import styled from "styled-components";
import {CustomModal} from "../Modal";

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

export const CustomToolbar = <T extends Nameable>({readOnly, numSelected, label, rows, ...props}: CustomToolbarProps<T>) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true)
  }
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false)
  }

  const deleteModal = (id: number, name:string) => {
    return <CustomModal open={openDeleteModal}
                 handleClose={handleCloseDeleteModal}
                 title={"Eliminar " + label.toLowerCase()}
                 content={
                   <Typography>Desea eliminar el valor con id <b>{id}</b> y
                     nombre <b>{name}</b> de {label.toLowerCase()}?</Typography>
                 }
                 footer={
                   <CustomButton color={'error'} onClick={handleCloseDeleteModal}>Eliminar</CustomButton>
                 }/>
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
                  <CustomButton color={'info'} title={'Editar'} endIcon={<Edit/>}>Editar</CustomButton>
                  <CustomButton color={'error'} title={'Eliminar'} endIcon={<Delete/>} onClick={handleOpenDeleteModal}>Eliminar</CustomButton>
                {deleteModal(rows[numSelected-1].id, rows[numSelected-1].nombre) }
              </>
          }
          {!readOnly && <CustomButton color={'primary'} title={'Crear'} endIcon={<Add/>} href={"admin/users/create"}>Crear</CustomButton>}
        </StyledButtonGroup>
      </StyledDivider>
    </StyledToolbar>)
}
