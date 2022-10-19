import styled from 'styled-components'

export const CardsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const CardContainer = styled.div<{color?: string}>`
  align-items: center;
  background-color: ${({color}) => color || ''};
  border-radius: 20px;
  color: white;
  display: flex;
  gap: 16px;
  height: fit-content;
  justify-content: center;
  padding: 24px 40px;

  & span {
    font-size: 3rem;
    font-weight: 700;
    font-family: Poppins;
  }

  & p {
    color: white;
    font-size: 1rem;
    font-weight: 400;
    font-family: Poppins;
    white-space: break-spaces;
  }
`