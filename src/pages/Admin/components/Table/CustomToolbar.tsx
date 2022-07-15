import {CustomToolbarProps} from "./props";
import {ButtonGroup, InputAdornment, Toolbar, Typography} from "@mui/material";
import {Add, Delete, FilterAlt, Search, Edit} from "@mui/icons-material";
import {
  Button,
  Modal,
  Input,
} from '@components';
import React, {useState} from "react";
import styled from "styled-components";
import {routes} from "../../../../router";
import {BaseEntityAdapter} from "../../../../models/BaseEntityAdapter";

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

export const CustomToolbar = <T extends BaseEntityAdapter>({readOnly, numSelected, label, rows, ...props}: CustomToolbarProps<T>) => {
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true)
  }
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false)
  }

  const deleteModal = (id: number, name:string) => {
    return <Modal open={openDeleteModal}
                 onClose={handleCloseDeleteModal}
                 title={"Eliminar " + label.toLowerCase()}
                 children={
                   <Typography>Desea eliminar la entrada con id <b>{id}</b> y
                     nombre <b>{name}</b> de {label.toLowerCase()}?</Typography>
                 }
                 footer={
                   <Button color={'error'} onClick={handleCloseDeleteModal}>Eliminar</Button>
                 }/>
  }

  const rowFound = rows.find(row => row.id === numSelected);
  return (
    <StyledToolbar>
      <StyledDivider>
        <Typography variant="h4" id={label + "Title"} component="div">{label}</Typography>
      </StyledDivider>
      <StyledDivider>
        <Input disabled placeholder={"Buscar"} variant='search'/>
        <Button disabled={true} color={'secondary'} title={'Filtrar'} endIcon={<FilterAlt/>}>Filtrar</Button>
        <StyledButtonGroup>
          {!readOnly && numSelected > 0 &&
              <>
                  <Button color={'info'} title={'Editar'} endIcon={<Edit/>}>Editar</Button>
                  <Button color={'error'} title={'Eliminar'} endIcon={<Delete/>} onClick={handleOpenDeleteModal}>Eliminar</Button>
                {rowFound &&
                  deleteModal(rowFound.id, rowFound.nombre)
                }
              </>
          }
          {!readOnly && <Button color={'primary'} title={'Crear'} endIcon={<Add/>} href={routes.admin.users.create.path}>Crear</Button>}
        </StyledButtonGroup>
      </StyledDivider>
    </StyledToolbar>)
}
