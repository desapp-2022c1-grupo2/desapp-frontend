import {BaseEntityAdapter} from "./BaseEntityAdapter";

export class UserAdapter extends BaseEntityAdapter {
  constructor(public id: number,
              public nombre: string,
              public apellido: string,
              public email: string,
              public materia: number,
              // public trabajosPracticos: number[]
  ) {
    super();
  }
}
