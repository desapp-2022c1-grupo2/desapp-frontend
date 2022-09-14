import { GridColDef } from "@mui/x-data-grid"

export function getStudentColumns(): GridColDef[] {
  return [
    {field: "id", headerName: "ID", editable: false, maxWidth: 50},
    {field: "lastName", headerName: "Nombre", editable: false, width: 300,
      renderCell: (params) => `${params.row.lastName}, ${params.row.name}`
    },
    {field: "email", headerName: "Email", editable: false, minWidth: 200},
    {field: "password", headerName: "Contraseña", editable: false, minWidth: 200,
      renderCell: (params) => params.value
    },
    {field: "phone", headerName: "Telefono", editable: false, minWidth: 200},
    {field: "dni", headerName: "DNI", editable: false},
    {field: "birthDate", headerName: "Fecha de nacimiento", editable: false},
    {field: "materia_cursada", headerName: "Materia cursada", editable: false},
    {field: "fecha_cambio_materia_cursada", headerName: "Fecha de cambio de materia cursada", editable: false, minWidth: 200},
    {field: "materia_padre_cursada", headerName: "Materia padre", editable: false},
    {field: "comision", headerName: "Comisión", editable: false},
    {field: "rondina", headerName: "Rondina", editable: false},
    {field: "about", headerName: "Acerca de", editable: false, minWidth: 500},
    {field: "picture", headerName: "Foto de perfil", editable: false},
    {field: "materia2", headerName: "Materia 2", editable: false},
    {field: "habilitado", headerName: "Habilitado", editable: false},
  ];

}
