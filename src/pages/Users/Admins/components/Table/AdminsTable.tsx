import React, { useState } from "react"
import { Field, Table } from "@components"
import { IAdmin } from "@models"
import { selectAdmins } from '@store'
import {
  CreateAdminModal,
  DeleteAdminModal,
  UpdateAdminModal,
} from "@pages/Users/Admins/components"
import { getAdminColumns } from "./AdminColumns"
import { OpenCreateButton } from "@src/pages/Users/components"
import { useCreateAdmin } from "../../hooks"

export const AdminsTable = () => {
  const admins = selectAdmins()
  const { handleOpen } = useCreateAdmin()
  const [value, setValue] = useState<string>('')
  const [filtered, setFiltered] = useState<IAdmin[]>(admins)

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value = event.target.value.toString()
    setValue(value)
    value = value.toLocaleLowerCase()

    setFiltered(admins.filter(x =>
      (x.name.first + ' ' + x.name.last).toLocaleLowerCase().includes(value) ||
      x.email.toLocaleLowerCase().includes(value)
    ))
  }

  return (
    <>
      <DeleteAdminModal />
      <UpdateAdminModal />
      <CreateAdminModal />
      <Table
        buttons={<OpenCreateButton onClick={handleOpen} variant='text'/>}
        columns={[]}
        search={
          <Field
            variant='search'
            value={value}
            onChange={onChange}
            placeholder='Buscar...'
          />
        }
        handleColumns={getAdminColumns}
        loading={!admins.length}
        rows={!!value ? filtered : admins}
      />
    </>
  )
}




