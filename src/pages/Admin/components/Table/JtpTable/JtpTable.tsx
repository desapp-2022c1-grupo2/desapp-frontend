import React, {useEffect, useState} from "react";
import {getAllJtp, updateJtpDatagrid} from "../../../../../service";
import {Jtp} from "../../../../../models";

import {DataGrid, GridColDef, GridEventListener,} from '@mui/x-data-grid';
import {DataGridLocaleText} from "./DataGridLocaleText";
import {validateDate} from "../../../../../util";
import {MuiCustomToolbar} from "../MuiCustomToolbar";
import {getJtpColumns} from "./JtpColumns";

export const JtpTable = () => {
  const [jtps, setJtps] = useState<Jtp[]>([]);

  //Review this
  useEffect(() => {
    const fetchAllUsers = async () => {
      const obtainedData: Jtp[] = await getAllJtp();
      const obtainedJtps: Jtp[] = obtainedData.map(jtp => new Jtp({
        id: jtp.id,
        name: jtp.name,
        lastName: jtp.lastName,
        email: jtp.email,
        courseId: jtp.courseId,
        createdAt: validateDate(jtp.createdAt),
        updatedAt: validateDate(jtp.updatedAt)
      }));
      setJtps(obtainedJtps);
    }
    fetchAllUsers().then(value => console.log("fetched users"));
  }, []);

  const handleCommit: GridEventListener<"cellEditCommit"> | undefined = (e) => {
    // if there are changes -> update jtp
    if (jtps.find(jtp => jtp.id === e.id)[e.field] !== e.value) {
      // {id: e.id, [e.field]: e.value}
      let jtp = new Jtp({id: e.id, [e.field]: e.value})
      updateJtpDatagrid(jtp).then(r => console.log('updated!', r));
    }
  }

  let columns: GridColDef[] = getJtpColumns();
  return (
    <div style={{height: '75vh', width: '100%'}}>
      <DataGrid rows={jtps}
                columns={columns}
                loading={!jtps.length}
                onCellEditCommit={handleCommit}
                localeText={
                  DataGridLocaleText
                }
                components={{
                  Toolbar: MuiCustomToolbar,
                  Pagination: null
                }}
                componentsProps={{
                  toolbar: {
                    showQuickFilter: true,
                    quickFilterProps: {debounceMs: 500},
                  },
                }}
      />
    </div>);
}
