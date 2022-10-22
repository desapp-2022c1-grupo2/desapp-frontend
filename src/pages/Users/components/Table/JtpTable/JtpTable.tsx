import React, { useEffect, useState } from "react"
import { IJtp } from "@src/models_copy"
import { selectJtps } from '@store'
import { getJtpColumns } from "./JtpColumns"
import { NewJtpModal } from "@adminPages/components"
import { Table } from "@src/components"
import { DeleteJtpModal, EditJtpModal } from "../../Modals"

export const JtpTable = () => {
  const jtps: IJtp[] = selectJtps()
  const [flag, setFlag] = useState<boolean>(false)

  useEffect(() => { setFlag(true) }, [])
  useEffect(() => {
    try {
      const btnNewJTP = document.getElementById("btnAgregarJTP")
      if(flag && btnNewJTP) {
        document.getElementsByClassName("MuiDataGrid-toolbarContainer")[0].append(btnNewJTP)
        btnNewJTP.className = btnNewJTP.className.replace('hide', '')
      }
    } catch (err){ console.error(err)}
  }, [flag])

  return (
    <>
      <NewJtpModal id="btnAgregarJTP" />
      <DeleteJtpModal />
      <EditJtpModal />
      <Table
        columns={[]}
        handleColumns={getJtpColumns}
        disableDensitySelector={true}
        loading={!jtps.length}
        rows={jtps}
      />
    </>
  )
}
