import React, {useEffect, useState} from "react";
import {getAllJtp} from "../../../../../service";
import {Jtp} from "../../../../../models";
import {JtpAdapter} from "../../../../../models/JtpAdapter";
import {JtpAdapterTable} from "./JtpAdapterTable";

export const JtpTable = () => {
  const [jtps, setJtps] = useState<JtpAdapter[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const obtainedData: Jtp[] = await getAllJtp();
      const adaptedUsers: JtpAdapter[] = obtainedData.map(jtp => new JtpAdapter(jtp.id, jtp.name, jtp.lastName, jtp.email, jtp.courseId));
      setHeaders(Object.keys(adaptedUsers[0]))
      setJtps(adaptedUsers);
    }
    fetchAllUsers();
  }, []);

  return <JtpAdapterTable rows={jtps} headers={headers} label={"Usuarios"} readOnly={false}/>
}
