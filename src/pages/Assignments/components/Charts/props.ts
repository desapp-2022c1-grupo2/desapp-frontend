import { BarDatum } from '@nivo/bar'

export interface barData extends BarDatum {
  average: number,
  student: number,
  tp: string
}

export interface pieData extends Record<string, unknown> {
  id: string,
  label: string,
  value: number
}

export interface radarData extends Record<string, unknown> {
  average: number,
  student: number,
  variable: string
}

export interface containerProps {
  height?: string,
  width?: string,
}

export interface barProps { data: barData[] }
export interface pieProps { data: pieData[] }
export interface radarProps { data: radarData[] }

export interface chartProps extends containerProps{
  title?: string,
  children?: React.ReactNode,
}
