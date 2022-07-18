import {Assignment} from "../../../../../models";
import {AssignmentAdapterTable} from "./AssignmentAdapterTable";
import React, {useState, useEffect} from "react";
import {getAllAssignments} from "../../../../../service";

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


export const AssignmentTable = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllAssignments = async () => {
      const obtainedData = await getAllAssignments();
      setHeaders(Object.keys(obtainedData[0]))
      setAssignments(obtainedData);
    }
    fetchAllAssignments();
  }, []);

  return <AssignmentAdapterTable<Assignment> rows={assignments} headers={headers} label={"Trabajos Prácticos"} readOnly={true}/>
}
