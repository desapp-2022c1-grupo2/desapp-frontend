import React, {useEffect, useState} from "react";
import {getAllJtp} from "../../../../../service";
import {JtpAdapter} from "../../../../../models";
import {validateDate} from "../../../../../util";
import {JtpToolbar} from "./JtpToolbar";
import {TableContent} from "../TableContent";
import {Table} from "../Table";

export const JtpTable = () => {
  const [jtps, setJtps] = useState<JtpAdapter[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);
  const label = "Usuarios";
  const [page, setPage] = React.useState(0);
  const [selected, setSelected] = useState<number>(-1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  useEffect(() => {
    const fetchAllUsers = async () => {
      const obtainedData = await getAllJtp();
      const adaptedUsers: JtpAdapter[] = obtainedData.map(jtp => new JtpAdapter(jtp.id, jtp.name, jtp.lastName, jtp.email, jtp.courseId, validateDate(jtp.createdAt), validateDate(jtp.updatedAt)));
      setHeaders(Object.keys(adaptedUsers[0]))
      setJtps(adaptedUsers);
    }
    fetchAllUsers();
  }, [jtps, rowsPerPage]);

  const toolbar = (<JtpToolbar selected={selected} rows={jtps} label={label}/>);
  const tableContent = (
    <TableContent rows={jtps} rowsPerPage={rowsPerPage} page={page} headers={headers} setSelected={setSelected}
                  selected={selected}/>);
  return (<Table toolbar={toolbar}
                 tableContent={tableContent}
                 label={label}
                 rowsLength={jtps.length}
                 headers={headers}
                 page={page}
                 setPage={setPage}
                 rows={jtps}
                 rowsPerPage={rowsPerPage}
                 setRowsPerPage={setRowsPerPage}/>);
}
