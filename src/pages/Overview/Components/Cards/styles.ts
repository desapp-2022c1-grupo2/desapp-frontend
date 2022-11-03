import styled from 'styled-components'

export const CardsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1800px;
`

export const CardContainer = styled.div<{color?: string}>`
  align-items: center;
  background-color: ${({color}) => color || ''};
  border-radius: 20px;
  color: white;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  height: fit-content;
  justify-content: center;
  padding: 16px;
  width: 100%;

  & p {
    color: white;
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 400;
  }

  & span {
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 700;
  }

  @media (min-width: 480px) {
    width: 45%;
    flex-direction: row;
    padding: 24px 40px;
    gap: 16px;

    & span { font-size: 3rem; }
    & p { font-size: 0.875rem; white-space: break-spaces; }
  }

  @media (min-width: 1024px) {
    width: fit-content;
  }
`