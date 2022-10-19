import { GridColDef } from "@mui/x-data-grid"

export function getAdminColumns(): GridColDef[] {
  return [
    {field: "id", headerName: "ID", editable: false, maxWidth: 50},
    {field: "lastName", headerName: "Nombre", editable: false, width: 300,
      renderCell: (params) => `${params.row.lastName}, ${params.row.name}`
    },
    {field: "email", headerName: "Email", editable: false, minWidth: 200},
  ];

}
