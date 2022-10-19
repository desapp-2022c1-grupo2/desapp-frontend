import styled from 'styled-components'

export const EvaluationStatsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const AssignmentCounterContainer = styled.div<{ color?: string, small?: boolean, vertical?: boolean }>`
  align-items: center;
  background-color: var(--unahurWhite);
  border-radius: ${({ small }) =>  small ? '5px' : '10px'};
  box-shadow: ${({ vertical }) => vertical ? '' : 'var(--box-shadow)'};
  display: flex;
  flex-direction: ${({ vertical }) =>  vertical ? 'column-reverse' : 'row'};
  gap: ${({ small }) =>  small ? '4px' : '8px'};
  justify-content: center;
  padding: ${({ small }) =>  small ? '8px' : '8px 16px'};

  & span::after {
    border-radius: 50px;
    background-color: ${({color}) => color || ''};
    content: ' ';
    display: block;
    padding: ${({ small }) =>  small ? '2px' : '4px'};;
  }

  & h2 {
    font-family: Poppins;
    font-weight: 700;
    font-size: ${({ small }) =>  small ? '12px' : '20px'};

    text-align: center;
    letter-spacing: 1px;
  }

  & p {
    font-family: Poppins;
    font-weight: 400;
    font-size: ${({ small }) =>  small ? '8px' : '12px'};
    
    text-align: center;
    letter-spacing: 1px;
  }
`