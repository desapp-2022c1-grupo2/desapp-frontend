import styled from 'styled-components'

export const QuoteContainer = styled.div`
  width: 100%;

  & label {
    margin-bottom: 16px;
  }

  & p {
    background-color: var(--unahurSoftGrey);
    padding: 24px;
    border-radius: 10px;
    font-style: italic;
    font-size: 1rem;
    line-height: 1rem;
    text-align: justify;
  }
`