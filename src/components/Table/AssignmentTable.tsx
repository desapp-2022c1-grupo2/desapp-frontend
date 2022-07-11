import {Assignment} from "./props";
import {CustomTable} from "./CustomTable";
import React from "react";

function getAssignmentHeaders() {
  return [
    "Id",
    "Título",
    "Fecha de inicio",
    "Fecha de fin",
    "Estado",
    "Porcentaje completado"
  ]
}

function getAssignmentsRows(): Array<Assignment> {
  function createData(
    id: number,
    name: string,
    startDate: string,
    endDate: string,
    status: string,
    completedPercentage: number
  ): Assignment {
    return {
      estado: status,
      fechaInicio: startDate,
      fechaFin: endDate,
      id: id,
      nombre: name,
      porcentajeCompletado: completedPercentage
    };
  }

  return [
    createData(1, "TP1", "05/06", "Wed Jul 06 2022 01:00:00 GMT-0300 (Argentina Standard Time)", "started", 85),
    createData(2, "TP2", "03/06", "04/06", "disabled", 0),
    createData(3, "TP2", "03/06", "04/06", "disabled", 0),
    createData(4, "TP2", "03/06", "04/06", "disabled", 0),
    createData(5, "TP2", "03/06", "04/06", "finished", 100),
    createData(6, "TP2", "03/06", "04/06", "disabled", 0),
  ];
}


export const AssignmentTable = () => {
  return <CustomTable<Assignment> rows={getAssignmentsRows()} headers={getAssignmentHeaders()}
                                  label={"Trabajos Prácticos"} readOnly={true}/>
}
