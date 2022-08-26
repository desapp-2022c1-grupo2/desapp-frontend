import React, {useState} from "react";
import {CourseAdapter} from "../../../../../models";
import {deleteUser} from "../../../../../service";
import {GridRenderCellParams} from "@mui/x-data-grid";
import {CircularProgress, IconButton} from "@mui/material";
import {DeleteOutlineOutlined} from "../../../../../components";
export function getJtpColumns(courses) {

  const [loading, setLoading] = useState(false);

  return [
    {headerName: "ID", field: 'id', flex: 1, editable: false},
    {headerName: "Nombre", field: 'name', flex: 2, editable: true},
    {headerName: "Apellido", field: 'lastName', flex: 2, editable: true},
    {headerName: "Email", field: "email", flex: 2, editable: true},
    {
      headerName: "Materia",
      field: "courseId",
      flex: 3,
      editable: true,
      type: "singleSelect",
      valueOptions: courses ? courses.map(course => {
        return {
          value: course.id,
          label: course.name
        }
      }) : []
    },
    {headerName: "Fecha de creación", field: "createdAt", flex: 3, editable: true, type: "date"},
    {headerName: "Última actualización", field: "updatedAt", flex: 3, editable: false, type: "date"},
    {
      field: "delete",
      headerName: "Eliminar",
      flex: 1,
      align: "center",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => (
        //  Implemete deletion
        <IconButton onClick={() => {
          setLoading(true);
            deleteUser(parseInt(params.id.valueOf.toString())).then(r => console.log(r))
          setLoading(false);
        }}>
          {loading ? <CircularProgress/> : <DeleteOutlineOutlined />}

        </IconButton>
),
},
  ];

}
