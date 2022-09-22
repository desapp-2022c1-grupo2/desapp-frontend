import styled from 'styled-components'

export const FieldLabel = styled.label`
  display: block;
  text-align: left;
  width: 100%;
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`

export const ReadOnlyFieldContainer = styled.div`width: 320px;`

export const ReadOnlyFieldContent = styled.label`
  background-color: var(--unahurGreenAlt);
  border-radius: 10px;
  padding: 16px 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  font-weight: 400;
  gap: 8px;
  margin: 4px;
  margin-bottom: 16px;
`

export const ReadOnlyFieldLabel = styled.label`
  display: block;
  padding: 0 8px ;
  text-align: left;
  width: 100%;
`