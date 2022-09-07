import styled from "styled-components"
import { AppBar } from "@mui/material"

export const TopHeader = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 0 4%;
  max-width: 1200px;
  width: 100%;
`

export const AdminHeaderContainer = styled(AppBar)`
  align-items: center;
  display: flex;
  background-color: #FFFFFF !important;
  flex-direction: column;
  width: 100%;
`