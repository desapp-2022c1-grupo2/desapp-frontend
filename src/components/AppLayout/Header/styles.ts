import styled from 'styled-components'

interface headerProp {
  slim: boolean,
}

export const HeaderTitle = styled.h1`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const HeaderContainer = styled.div<headerProp>`
  align-items: center;
  background-color: var(--unahurWhite);
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: space-between;
  max-width: 1800px;
  padding: 16px 24px;
  position: fixed;
  transition: 0.3s linear;
  width: ${({slim}) => slim ? 'calc(100vw - 320px)' : 'calc(100vw - 168px)' };
  z-index: 1000;
`