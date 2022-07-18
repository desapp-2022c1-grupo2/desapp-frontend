import React, {useEffect, useState} from "react";
import {getAllJtp} from "../../../../../service";
import {JtpAdapter} from "../../../../../models";
import {JtpAdapterTable} from "./JtpAdapterTable";

export const JtpTable = () => {
  const [jtps, setJtps] = useState<JtpAdapter[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const obtainedData = await getAllJtp();
      const adaptedUsers: JtpAdapter[] = obtainedData.map(jtp => new JtpAdapter(jtp.id, jtp.name, jtp.lastName, jtp.email, jtp.courseId, new Date(jtp.createdAt).toLocaleDateString("es-AR"), new Date(jtp.updatedAt).toLocaleDateString("es-AR")));
      setHeaders(Object.keys(adaptedUsers[0]))
      setJtps(adaptedUsers);
    }
    fetchAllUsers();
  }, []);

  return <JtpAdapterTable rows={jtps} headers={headers} label={"Usuarios"} readOnly={false}/>
}
