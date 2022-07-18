import React from "react"
import styled from "styled-components"
import { ButtonGroup, Toolbar } from "@mui/material"
import {
  Button,
  FilterAltOutlined,
  Input,
} from '@components'
import {
  DeleteUserModal,
  EditJtpModal,
  NewJtpModal,
} from '../Modals'
import { BaseEntityAdapter } from "../../../../models/BaseEntityAdapter"
import { CustomToolbarProps } from "./props"

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

export const CustomToolbar = <T extends BaseEntityAdapter>({
  readOnly,
  numSelected,
  label,
  rows,
  ...props
}: CustomToolbarProps<T>) => {
  return (
    <StyledToolbar>
      <StyledDivider>
        <h4 id={`${label}Title`}>{label}</h4>
      </StyledDivider>
      <StyledDivider>
        <Input disabled placeholder={"Buscar"} variant='search'/>
        <Button disabled={true} color={'secondary'} title={'Filtrar'} startIcon={<FilterAltOutlined />}>Filtrar</Button>
        <StyledButtonGroup>
          { !readOnly && <NewJtpModal /> }
        </StyledButtonGroup>
      </StyledDivider>
    </StyledToolbar>)
}
