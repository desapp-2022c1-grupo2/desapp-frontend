import styled from 'styled-components'

export const FieldsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`

export const VariablesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: start;
  text-align: left;
  width: 100%;

  & div {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 24px;
  text-align: left;
  width: 100%;
`