import {CustomTable} from "./CustomTable";
import React, {useEffect, useState} from "react";
import {getAllAssignments} from "../../service";
import {Assignment} from "../../models";

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

  return <CustomTable<Assignment> rows={assignments} headers={headers} label={"Trabajos Prácticos"} readOnly={true}/>
}
