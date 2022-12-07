import { BarDatum } from '@nivo/bar'

export interface radarData extends Record<string, unknown> {
  average?: number | string,
  qualification: number | string,
  variable: string
}

export interface containerProps {
  height?: string,
  width?: string,
}

export interface radarProps { data: radarData[] }