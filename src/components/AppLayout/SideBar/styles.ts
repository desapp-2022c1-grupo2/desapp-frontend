import styled from 'styled-components'

interface SidebarContainerProps { slim: boolean }

export const SidebarContainer = styled.div<SidebarContainerProps>`
  align-items: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  margin: 24px 0 24px 24px;
  left: 0;
  padding: 64px 24px 40px 24px;
  position: relative;
  transition: 0.3s linear;
  width: ${(props) => !props.slim ? '96px' : '320px'};
`