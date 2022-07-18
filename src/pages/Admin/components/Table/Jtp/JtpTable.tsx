import React, {useEffect, useState} from "react";
import {getAllJtp} from "../../../../../service";
import {JtpAdapter} from "../../../../../models";
import {JtpAdapterTable} from "./JtpAdapterTable";
import {validateDate} from "../../../../../util";

export const JtpTable = () => {
  const [jtps, setJtps] = useState<JtpAdapter[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const obtainedData = await getAllJtp();
      const adaptedUsers: JtpAdapter[] = obtainedData.map(jtp => new JtpAdapter(jtp.id, jtp.name, jtp.lastName, jtp.email, jtp.courseId, validateDate(jtp.createdAt), validateDate(jtp.updatedAt)));
      setHeaders(Object.keys(adaptedUsers[0]))
      setJtps(adaptedUsers);
    }
    fetchAllUsers();
  }, []);

  return <JtpAdapterTable rows={jtps} headers={headers} label={"Usuarios"} readOnly={false}/>
}
