import styled from 'styled-components'
import { Button, Field } from '@components'

export const LoginLayout = styled.div`
  background-color: var(--unahurBlack);
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
  height: 100%;
  justify-content: center;
  padding: 56px 24px;
`

export const Title = styled.h4`
  font-weight: 700;
  margin: 16px auto;
`

export const LoginField = styled(Field)`
  margin: 8px 0;
  width: 100%;
`

export const SubmitButton = styled(Button)`
  cursor: pointer;
  margin: 32px 0;
  width: 100%;
`

export const Logo = styled.img`
  height: 112px;
  width: 102px;
`
