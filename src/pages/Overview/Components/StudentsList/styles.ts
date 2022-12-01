import styled from 'styled-components'

export const StudentListContainer = styled.div`
  background-color: var(--unahurWhite);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
  align-items: center;
  max-height: 512px;
  overflow: hidden;
  width: fit-content;
  & div label { display: none; }
`

export const StudentQualificationContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 44px;
`