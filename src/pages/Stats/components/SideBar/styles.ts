import styled from 'styled-components'

interface SidebarContainerProps { slim: boolean }

export const SidebarContainer = styled.div<SidebarContainerProps>`
  align-items: space-between;
  background-color: white;
  border-radius: 15px;
  border: 1px solid var(--unahurGrey);
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  margin: 8px;
  left: 0;
  padding: 24px 16px;
  transition: 0.3s linear;
  width: ${(props) => !props.slim ? '96px' : '320px'};
`