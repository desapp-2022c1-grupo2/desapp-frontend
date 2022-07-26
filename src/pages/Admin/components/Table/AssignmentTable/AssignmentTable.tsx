import React, {useEffect, useState} from "react";
import {getAllAssignments} from "../../../../../service";
import {AssignmentAdapter} from "../../../../../models";
import {validateDate} from "../../../../../util";
import {ReadOnlyToolbar} from "../ReadOnlyToolbar";
import {TableContent} from "../TableContent";
import {Table} from "../Table";

export const AssignmentTable = () => {
  const [assignments, setAssignments] = useState<AssignmentAdapter[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const [selected, setSelected] = useState<number>(-1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const label = "Trabajos Prácticos"

  useEffect(() => {
    const fetchAllAssignments = async () => {
      const obtainedData = await getAllAssignments();
      const adaptedAssignments: AssignmentAdapter[] = obtainedData.map(assignment => new AssignmentAdapter(assignment.id, assignment.name, assignment.courseId, assignment.shortDescr, assignment.url, validateDate(assignment.startDate), validateDate(assignment.endDate)));
      setHeaders(Object.keys(adaptedAssignments[0]))
      setAssignments(adaptedAssignments)
    }
    fetchAllAssignments();
  }, [assignments]);

  const toolbar = (<ReadOnlyToolbar label={label}/>);
  const tableContent = (
    <TableContent<AssignmentAdapter> page={page}
                                     rowsPerPage={rowsPerPage}
                                     rows={assignments}
                                     headers={headers}
                                     selected={selected}
                                     setSelected={setSelected}/>);
  return (<Table toolbar={toolbar}
                 tableContent={tableContent}
                 label={label}
                 rowsLength={assignments.length}
                 headers={headers}
                 page={page}
                 setPage={setPage}
                 rows={assignments}
                 rowsPerPage={rowsPerPage}
                 setRowsPerPage={setRowsPerPage}/>);
}
