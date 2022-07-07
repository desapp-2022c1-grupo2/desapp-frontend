import {Ideable} from "./Ideable";

export interface Assignment extends Ideable {
  title: string,
  startDate: string, //TODO: Use date instead of string
  endDate: string, //TODO: Use date instead of string
  status: string
  completedPercentage: number
}
