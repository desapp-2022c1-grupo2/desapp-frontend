import {BaseEntityAdapter} from "./BaseEntityAdapter";

export class JtpAdapter extends BaseEntityAdapter {
  constructor(public id: number,
              public nombre: string,
              public apellido: string,
              public email: string,
              public materia: number,
              public fechaCreacion: string,
              public fechaActualizacion: string,
              // public trabajosPracticos: number[]
  ) {
    super();
  }
}
