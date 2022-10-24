import React, { useEffect, useState } from "react"
import { IJtp } from "@models"
import { selectJtps } from '@store'
import { getJtpColumns } from "./JtpColumns"
import { NewJtpModal,DeleteJtpModal, EditJtpModal } from "@pages/Users/components"
import { Table } from "@components"

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
