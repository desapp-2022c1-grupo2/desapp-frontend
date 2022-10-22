import React from "react"
import {GridColDef} from "@mui/x-data-grid"
import { Button, Chip, GoToFoward } from "@components"
import { ICourse, IJtp } from "@src/models_copy"
import { selectCourses, selectJtps } from "@store"

export function getAssignmentColumns(): GridColDef[] {
  const courses: ICourse[] = selectCourses()
  const jtps: IJtp[] = selectJtps()

  const getJtpName = (id: number): string => {
    const jtp: IJtp | undefined = jtps.find(x => { return x.id == id})
    return `${jtp?.name} ${jtp?.lastName}`
  }

  return [
    {headerName: "#TP", width: 50, field: "number" },
    {headerName: "Nombre", flex: 3 , field: "name" },
    {headerName: "Curso", flex: 2, field: "courseId", 
      renderCell: (params) => <Chip disabled color='unahurCyan' label={
        courses.find(x => { return x.id == params.value})?.name || params.value} />
    },
    {headerName: "JTP", flex: 2 , field: "jtpId",
      renderCell: (params) => <Chip
        disabled
        color='unahurGreen'
        title={getJtpName(params.value)}
        label={getJtpName(params.value)}
      />,
    },
    //{headerName: "url", field: "url"},
    //{headerName: "Descripción corta", field: "shortDescr", minWidth: 300 },
    //{headerName: "Despcripción", field: "description", minWidth: 500},
    //{headerName: "Consigna", field: "taskDescription"},
    {headerName: "Inicio", flex: 1, field: "startDate"},
    {headerName: "Fin", flex: 1, field: "endDate"},
    //{headerName: "Tags", flex: 1, field: "tags"},
    {
      field: "actions",
      headerName: "",
      flex: 1,
      minWidth: 128,
      align: "center",
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => <GoToFoward text="Ver Más"/>
    },
    //{headerName: "variable1", field: "var1"},
    //{headerName: "variable2", field: "var2"},
    //{headerName: "variable3", field: "var3"},
    //{headerName: "variable4", field: "var4"},
    //{headerName: "variable5", field: "var5"},
    //{headerName: "Tipo", field: "type"},
    //{headerName: "Estado", field: "status"},
    //{headerName: "Proceso individual", field: "individualProcess"},
  ];
}
