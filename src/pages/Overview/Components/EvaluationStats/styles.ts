import styled from 'styled-components'

export const EvaluationStatsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const AssignmentCounterContainer = styled.div<{ color?: string, small?: boolean, vertical?: boolean }>`
  align-items: center;
  background-color: var(--unahurWhite);
  border-radius: 10px;
  box-shadow: ${({ vertical }) => vertical ? '' : 'var(--box-shadow)'};
  display: flex;
  flex-direction: ${({ vertical }) =>  vertical ? 'column-reverse' : 'row'};
  gap: 8px;
  justify-content: flex-start;
  padding: ${({ small }) =>  small ? '8px' : '16px'};
  width: 220px;

  & span::after {
    border-radius: 50px;
    background-color: ${({color}) => color || ''};
    content: ' ';
    display: ${({ vertical }) =>  vertical ? 'none' : 'block'};
    padding: ${({ small }) =>  small ? '2px' : '4px'};;
  }

  & h2 {
    font-family: Poppins;
    font-weight: 700;
    font-size: ${({ small }) =>  small ? '14px' : '20px'};
    letter-spacing: 1px;
    text-align: center;
  }

  & p { 
    font-weight: 400;
    font-size: ${({ small }) =>  small ? '12px' : '16px'};
    text-align: center;
    letter-spacing: 1px;
  }
`
