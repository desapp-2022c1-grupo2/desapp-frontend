import {AssignmentAdapterTable} from "./AssignmentAdapterTable";
import React, {useState, useEffect} from "react";
import {getAllAssignments} from "../../../../../service";
import {AssignmentAdapter} from "../../../../../models";
import {validateDate} from "../../../../../util";

export const AssignmentTable = () => {
  const [assignments, setAssignments] = useState<AssignmentAdapter[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllAssignments = async () => {
      const obtainedData = await getAllAssignments();
      const adaptedAssignments: AssignmentAdapter[] = obtainedData.map(assignment => new AssignmentAdapter(assignment.id, assignment.name, assignment.courseId, assignment.shortDescr, assignment.url, validateDate(assignment.startDate), validateDate(assignment.endDate)));
      setHeaders(Object.keys(adaptedAssignments[0]))
      setAssignments(adaptedAssignments)
    }
    fetchAllAssignments();
  }, []);

  return <AssignmentAdapterTable rows={assignments} headers={headers} label={"Trabajos Prácticos"} readOnly={true}/>
}
