import { ReactNode } from "react"
import { NavLinkProps } from "react-router-dom"

export interface NavigationProps { slim?: boolean }
export interface param { isActive: boolean }
export interface TabProps extends NavLinkProps {
  icon?: ReactNode,
  slim?: boolean,
  label: string,
}
