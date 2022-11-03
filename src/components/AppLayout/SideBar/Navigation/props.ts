import { ReactNode } from "react"
import { NavLinkProps } from "react-router-dom"

export interface param { isActive: boolean }
export interface TabProps extends NavLinkProps {
  icon?: ReactNode,
  tooltip?: string
  label: string,
}
