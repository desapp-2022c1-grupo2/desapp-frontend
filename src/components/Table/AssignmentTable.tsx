import {TrabajoPractico} from "./props";
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

function getAssignmentsRows(): Array<TrabajoPractico> {
  function createData(
    id: number,
    title: string,
    startDate: string,
    endDate: string,
    status: string,
    completedPercentage: number
  ): TrabajoPractico {
    return {
      id,
      title,
      startDate,
      endDate,
      status,
      completedPercentage
    };
  }

  return [
    createData(1, "TP1", "05/06", "Wed Jul 06 2022 01:00:00 GMT-0300 (Argentina Standard Time)", "started", 85),
    createData(2, "TP2", "03/06", "04/06", "disabled", 0),
    createData(3, "TP2", "03/06", "04/06", "disabled", 0),
    createData(4, "TP2", "03/06", "04/06", "disabled", 0),
    createData(5, "TP2", "03/06", "04/06", "disabled", 0),
    createData(6, "TP2", "03/06", "04/06", "disabled", 0),
  ];
}


export const AssignmentTable = () => {
  return <CustomTable<TrabajoPractico> rows={getAssignmentsRows()} headers={getAssignmentHeaders()} label={"Trabajos Prácticos"}/>
}