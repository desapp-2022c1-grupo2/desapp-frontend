import React from "react"
import styled from "styled-components"
import {Toolbar} from "@mui/material"
import {Button, FilterAltOutlined, Input,} from '@components'
import {ReadOnlyToolbarProps} from "./props";

const StyledDivider = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`

const StyledToolbar = styled(Toolbar)`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
`

export const ReadOnlyToolbar = ({label}: ReadOnlyToolbarProps) => {
  return (
    <StyledToolbar>
      <StyledDivider>
        <h4 id={`${label}Title`}>{label}</h4>
      </StyledDivider>
      <StyledDivider>
        <Input disabled placeholder={"Buscar"} variant='search'/>
        <Button disabled={true} color={'secondary'} title={'Filtrar'} startIcon={<FilterAltOutlined />}>Filtrar</Button>
      </StyledDivider>
    </StyledToolbar>)
}
