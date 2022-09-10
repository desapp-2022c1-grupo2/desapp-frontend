import styled from "styled-components"
import { AppBar } from "@mui/material"

export const LogoUnahur = styled.img`
  width: 40px;
  height: 40px;
`

export const TopHeader = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin: 0 4%;
  max-width: 1800px;
  height: 80px;
  width: 96%;
`

export const AdminHeaderContainer = styled(AppBar)`
  align-items: center;
  display: flex;
  background-color: #FFFFFF !important;
  flex-direction: column;
  height: 80px;
  width: 100%;
`