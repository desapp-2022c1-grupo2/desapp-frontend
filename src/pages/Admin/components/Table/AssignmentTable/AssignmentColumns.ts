import {GridColDef} from "@mui/x-data-grid";

export function getAssignmentColumns(): GridColDef[] {
  return [
    {headerName: "ID", field: "id",  editable: false},
    {headerName: "JTP asignado", field: "jtpId",  editable: false},
    {headerName: "Número", field: "number",  editable: false},
    {headerName: "Nombre", field: "name",  editable: false},
    {headerName: "url", field: "url",  editable: false},
    {headerName: "Descripción corta", field: "shortDescr",  editable: false, minWidth: 300 },
    {headerName: "Despcripción", field: "description",  editable: false, minWidth: 500},
    {headerName: "Consigna", field: "taskDescription",  editable: false},
    {headerName: "Fecha de inicio", field: "startDate",  editable: false},
    {headerName: "Fecha de fin", field: "endDate",  editable: false},
    {headerName: "Tags", field: "tags",  editable: false},
    {headerName: "variable1", field: "var1",  editable: false},
    {headerName: "variable2", field: "var2",  editable: false},
    {headerName: "variable3", field: "var3",  editable: false},
    {headerName: "variable4", field: "var4",  editable: false},
    {headerName: "variable5", field: "var5",  editable: false},
    {headerName: "Tipo", field: "type",  editable: false},
    {headerName: "Estado", field: "status",  editable: false},
    {headerName: "Curso", field: "courseId",  editable: false},
    {headerName: "Proceso individual", field: "individualProcess",  editable: false},
  ];

}
