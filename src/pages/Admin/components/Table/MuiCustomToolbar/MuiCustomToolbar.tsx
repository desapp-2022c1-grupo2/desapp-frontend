import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';

export const MuiCustomToolbar = () => {
  return (
    <GridToolbarContainer style={{margin: "10px"}}>
      <GridToolbarQuickFilter/>
      <GridToolbarColumnsButton/>
      <GridToolbarFilterButton/>
      <GridToolbarDensitySelector/>
      <GridToolbarExport/>
      {/*<CreateJtp/>*/}
    </GridToolbarContainer>
  );
}