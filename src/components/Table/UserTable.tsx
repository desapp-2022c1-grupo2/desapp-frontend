import {CustomTable} from "./CustomTable";
import React, {useEffect, useState} from "react";
import {getAllJtp} from "../../service";
import {User} from "../../models";
import {UserAdapter} from "../../models/UserAdapter";

function getUserHeaders() {
  return [
    "Id",
    "Nombre",
    "Email",
    "Materias",
    "Trabajos Practicos"
  ]
}


export const UserTable = () => {
  const [users, setUsers] = useState<UserAdapter[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const obtainedData: User[] = await getAllJtp();
      const adaptedUsers: UserAdapter[] = obtainedData.map(user => new UserAdapter(user.id, user.name, user.lastName, user.email, user.courseId));
      setHeaders(Object.keys(adaptedUsers[0]))
      setUsers(adaptedUsers);
    }
    fetchAllUsers();
  }, []);

  return <CustomTable<UserAdapter> rows={users} headers={headers} label={"Usuarios"} readOnly={false}/>
}
