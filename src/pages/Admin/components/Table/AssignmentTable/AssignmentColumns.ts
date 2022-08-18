import {GridColDef} from "@mui/x-data-grid";

export function getAssignmentColumns(): GridColDef[] {

  return [
    {headerName: "ID", field: "id", width: 50, editable: false},
    {headerName: "JTP asignado", field: "jtpId", width: 50, editable: false},
    {headerName: "Número", field: "number", width: 50, editable: false},
    {headerName: "Nombre", field: "name", width: 150, editable: false},
    {headerName: "url", field: "url", width: 150, editable: false},
    {headerName: "Descripción corta", field: "shortDescr", width: 300, editable: false},
    {headerName: "Despcripción", field: "description", width: 500, editable: false},
    {headerName: "Consigna", field: "taskDescription", width: 150, editable: false},
    {headerName: "Fecha de inicio", field: "startDate", width: 150, editable: false},
    {headerName: "Fecha de fin", field: "endDate", width: 150, editable: false},
    {headerName: "Tags", field: "tags", width: 150, editable: false},
    {headerName: "variable1", field: "var1", width: 150, editable: false},
    {headerName: "variable2", field: "var2", width: 150, editable: false},
    {headerName: "variable3", field: "var3", width: 150, editable: false},
    {headerName: "variable4", field: "var4", width: 150, editable: false},
    {headerName: "variable5", field: "var5", width: 150, editable: false},
    {headerName: "Tipo", field: "type", width: 50, editable: false},
    {headerName: "Estado", field: "status", width: 50, editable: false},
    {headerName: "Curso", field: "courseId", width: 50, editable: false},
    {headerName: "Proceso individual", field: "individualProcess", width: 50, editable: false},
  ];

}
