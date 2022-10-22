import { GridColDef } from "@mui/x-data-grid"

export function getSubmitedColumns(): GridColDef[] {
  return [
    {field: "student", headerName: "Estudiante/s", editable: false, minWidth: 200,
      renderCell: (params) => `${params.row.name} ${params.row.lastName}`
    },
    {field: "assigment", headerName: "Trabajo Práctico", editable: false, minWidth: 200,
      renderCell: (params) => `${params.row.name}`
    },
    {field: "qualification", headerName: "Nota", editable: false, minWidth: 200},
    {field: "tags", headerName: "Etiquetas", editable: false, minWidth: 200},
    {field: "dataSubmitted", headerName: "Fecha de entrega", editable: false, minWidth: 200},
  ];

}
