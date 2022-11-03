import React from "react"
import {GridColDef} from "@mui/x-data-grid"
import { Button, Chip } from "@components"
import { Assignment, Jtp } from "@models"
import { VisibilityOutlined } from "@mui/icons-material"

export function getAssignmentColumns(): GridColDef[] {
  return [
    {headerName: "#TP", width: 50, field: "number", align: 'center' },
    {headerName: "Nombre", flex: 3 , field: "name" },
    {headerName: "Curso", flex: 2, field: "course", align: 'center',
      renderCell: (params) => <Chip color='unahurCyan' label={params.value.name} />
    },
    {headerName: "JTP", flex: 2 , field: "jtp", align: 'center',
      renderCell: (params) => {
        const jtp = new Jtp(params.value)
        return <Chip
          color='unahurGreen'
          title={jtp.fullName()}
          label={jtp.fullName()}
        />
      },
    },
    //{headerName: "url", field: "url"},
    //{headerName: "Descripción corta", field: "shortDescr", minWidth: 300 },
    //{headerName: "Despcripción", field: "description", minWidth: 500},
    //{headerName: "Consigna", field: "taskDescription"},
    {headerName: "Inicio", flex: 1, field: "start", align: 'center', 
      renderCell: (params) => new Assignment(params.row).start
    },
    {headerName: "Fin", flex: 1, field: "end", align: 'center', 
      renderCell: (params) => new Assignment(params.row).end
    },
    //{headerName: "Tags", flex: 1, field: "tags"},
    {
      field: "actions",
      headerName: "",
      flex: 1,
      minWidth: 128,
      align: "center",
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => (
        <Button
          children={<VisibilityOutlined />}
          color='unahurBlack'
          onClick={() => {}}
          sx={{borderRadius: '50px', minHeight: 'fit-content', minWidth: 'fit-content', padding: '8px'}}
          title='Más detalles'
        />
      )
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
