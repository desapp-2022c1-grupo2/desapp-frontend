import React, {useEffect, useState} from "react";
import {getAllAssignments} from "../../../../../service";
import {Assignment} from "../../../../../models";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {getAssignmentColumns} from "./AssignmentColumns";
import {DataGridLocaleText} from "../JtpTable";
import {MuiCustomToolbar} from "../MuiCustomToolbar";
import {validateDate} from "../../../../../util";
import {Collapse} from "@mui/material";

export const AssignmentTable = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const fetchAllAssignments = async () => {
      const obtainedData = await getAllAssignments();
      const adaptedAssignments: Assignment[] = obtainedData.map(assignment => new Assignment(
        assignment.id,
        assignment.jtpId,
        assignment.number,
        assignment.name,
        assignment.url,
        assignment.shortDescr,
        assignment.description,
        assignment.taskDescription,
        validateDate(assignment.startDate),
        validateDate(assignment.endDate),
        assignment.tags,
        assignment.var1,
        assignment.var2,
        assignment.var3,
        assignment.var4,
        assignment.var5,
        assignment.type,
        assignment.status,
        assignment.courseId,
        assignment.individualProcess,
      ));
      setAssignments(adaptedAssignments)
    }
    fetchAllAssignments();
  }, []);

  let columns: GridColDef[] = getAssignmentColumns();

  return (<div style={{height: '75vh', width: '100%'}}>
    <DataGrid rows={assignments}
              columns={columns}
              getRowHeight={() => 'auto'}
              loading={!assignments.length}
              localeText={
                DataGridLocaleText
              }
              components={{
                Toolbar: MuiCustomToolbar,
                Pagination: null
              }}
              componentsProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: {debounceMs: 500},
                },
              }}
    />
  </div>);
}
