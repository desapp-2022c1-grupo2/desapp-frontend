import {CustomTable} from "./CustomTable";
import React, {useEffect, useState} from "react";
import {getAllJtp} from "../../service";
import {User} from "../../models";

export const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const obtainedData = await getAllJtp();
      setHeaders(Object.keys(obtainedData[0]))
      setUsers(obtainedData);
    }
    fetchAllUsers();
  }, []);

  return <CustomTable<User> rows={users} headers={headers} label={"Usuarios"} readOnly={false}/>
}
