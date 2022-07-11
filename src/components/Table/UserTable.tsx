import {User} from "./props";
import {CustomTable} from "./CustomTable";
import React from "react";

function getUserHeaders() {
  return [
    "Id",
    "Nombre",
    "Email",
    "Materias",
    "Trabajos Practicos"
  ]
}

function getUserRows(): Array<User> {
  function createData(
    id: number,
    nombre: string,
    email: string,
    materias: number,
    trabajosPracticos: number[],
  ): User {
    return {
      id,
      nombre,
      email,
      materias,
      trabajosPracticos
    };
  }

  return [
    createData(1, "JTP 1", "jtp1@unahur.edu.ar", 1, [1, 2]),
    createData(2, "JTP 2", "jtp2@unahur.edu.ar", 2, [3, 4]),
  ];
}


export const UserTable = () => {
  return <CustomTable<User> rows={getUserRows()} headers={getUserHeaders()} label={"Usuarios"} readOnly={false}/>
}
