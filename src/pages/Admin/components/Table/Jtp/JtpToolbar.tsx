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
} from '../../Modals'
import { CustomToolbarProps } from "../props"
import {JtpAdapter} from "../../../../../models/JtpAdapter";

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

export const JtpToolbar =({
  readOnly,
  numSelected,
  label,
  rows,
  ...props
}: CustomToolbarProps<JtpAdapter>) => {
  const userAdapter = rows.find(row => row.id === numSelected);
  const itemFound = userAdapter ? userAdapter : new JtpAdapter(-1, "", "", "", -1);
  return (
    <StyledToolbar>
      <StyledDivider>
        <h4 id={`${label}Title`}>{label}</h4>
      </StyledDivider>
      <StyledDivider>
        <Input disabled placeholder={"Buscar"} variant='search'/>
        <Button disabled={true} color={'secondary'} title={'Filtrar'} startIcon={<FilterAltOutlined />}>Filtrar</Button>
        <StyledButtonGroup>
          {
            (!readOnly && numSelected > 0) &&
              <>
                  <EditJtpModal jtp={itemFound}/>
                  <DeleteUserModal jtp={itemFound}/>
              </>
          }
          { !readOnly && <NewJtpModal /> }
        </StyledButtonGroup>
      </StyledDivider>
    </StyledToolbar>)
}