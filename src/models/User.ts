import {Ideable} from "./Ideable";

export interface User extends Ideable {
  nombre: string
  email: string
  materias: number[]
  trabajosPracticos: number[]
}
