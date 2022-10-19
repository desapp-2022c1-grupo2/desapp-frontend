import styled from 'styled-components'

interface headerProp {
  lg: boolean,
}

export const HeaderContainer = styled.div<headerProp>`
  background-color: var(--unahurWhite);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  align-items: center;
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
  position: fixed;
  width: ${({lg}) => lg ? 'calc(100% - 176px)' : 'calc(100% - 320px)' };
  z-index: 1000;
`