import {AssignmentAdapterTable} from "./AssignmentAdapterTable";
import React, {useState, useEffect} from "react";
import {getAllAssignments} from "../../../../../service";
import {AssignmentAdapter} from "../../../../../models";

export const AssignmentTable = () => {
  const [assignments, setAssignments] = useState<AssignmentAdapter[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  const validateDate = (date: string) => date ? new Date(date).toLocaleDateString("es-AR") : "-"

  useEffect(() => {
    const fetchAllAssignments = async () => {
      const obtainedData = await getAllAssignments();
      console.log(obtainedData)
      const adaptedAssignments: AssignmentAdapter[] = obtainedData.map(assignment => new AssignmentAdapter(assignment.id, assignment.name, assignment.courseId, validateDate(assignment.createdAt), validateDate(assignment.updatedAt)));
      setHeaders(Object.keys(adaptedAssignments[0]))
      setAssignments(adaptedAssignments)
    }
    fetchAllAssignments();
  }, []);

  return <AssignmentAdapterTable<AssignmentAdapter> rows={assignments} headers={headers} label={"Trabajos Prácticos"} readOnly={true}/>
}
