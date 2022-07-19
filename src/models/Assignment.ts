import {BaseEntity} from "./BaseEntity";

export interface Assignment extends BaseEntity {
  status: string
  completedPercentage: number
}
