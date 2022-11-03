import { GridColDef } from "@mui/x-data-grid"
import { Student } from "@src/models";

export function getSubmitedColumns(): GridColDef[] {
  return [
    {headerName: "Estudiante/s", field: "student", editable: false, minWidth: 200,
      renderCell: (params) => params.value ? new Student(params.value).fullName() : ''
    },
    {field: "assignment", headerName: "Trabajo Práctico", editable: false, minWidth: 200,
      renderCell: (params) => params.row.assignment ? params.row.assignment.name : ''
    },
    {field: "qualification", headerName: "Nota", editable: false, minWidth: 200, align: 'right'},
    {field: "tags", headerName: "Etiquetas", editable: false, minWidth: 200},
    {field: "date", headerName: "Fecha de entrega", editable: false, minWidth: 200,
      renderCell: (params) => `${params.value.nam}`
    },
  ];

}
