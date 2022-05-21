import styled from 'styled-components'
import { Button, Field } from '../../components'


export const LoginLayout = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

export const LoginContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 602px;
  justify-content: center;
  padding: 56px 24px;
  width: 368px;
`

export const LoginTitle = styled.h4`
 font-weight: 700;
`

export const LoginField = styled(Field)`
margin: 16px 0;
`

export const LoginConfirmButton = styled(Button)`
  width: 100%;
  margin: 32px 0;
`