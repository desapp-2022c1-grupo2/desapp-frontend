import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  IAdmin,
  IJtp,
  IStudent,
} from '@models'

interface userModals {
  logout: boolean,
  jtp: {
    selected?: IJtp,
    delete: boolean,
    update: boolean,
  },
  student: {
    selected?: IStudent,
    delete: boolean,
    update: boolean,
  },
  admin: {
    selected?: IAdmin,
    delete: boolean,
    update: boolean,
  },
}

const initialState: userModals = {
  logout: false,
  jtp: { delete: false, update: false },
  student: { delete: false, update: false },
  admin: { delete: false, update: false }
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setDeleteAdminModal(state, { payload }: PayloadAction<boolean>) { state.admin.delete = payload },
    setUpdateAdminModal(state, { payload }: PayloadAction<boolean>) { state.admin.update = payload },
    setDeleteJtpModal(state, { payload }: PayloadAction<boolean>) { state.jtp.delete = payload },
    setUpdateJtpModal(state, { payload }: PayloadAction<boolean>) { state.jtp.update = payload },
    setDeleteStudentModal(state, { payload }: PayloadAction<boolean>) { state.student.delete = payload },
    setLogoutModal(state, { payload }: PayloadAction<boolean>) { state.logout = payload },
    setUpdateStudentModal(state, { payload }: PayloadAction<boolean>) { state.student.update = payload },
    selectAdmin(state, { payload }: PayloadAction<IAdmin>) { state.admin.selected = payload },
    selectJtp(state, { payload }: PayloadAction<IJtp>) { state.jtp.selected = payload },
    selectStudent(state, { payload }: PayloadAction<IStudent>) { state.student.selected = payload },
    unselectAdmin(state){ state.admin.selected = undefined },
    unselectJtp(state){ state.student.selected = undefined },
    unselectStudent(state){ state.student.selected = undefined }
  }
})

export const {
  setDeleteAdminModal,
  setUpdateAdminModal,
  setDeleteJtpModal,
  setUpdateJtpModal,
  setDeleteStudentModal,
  setLogoutModal,
  setUpdateStudentModal,
  selectAdmin,
  selectJtp,
  selectStudent,
  unselectAdmin,
  unselectJtp,
  unselectStudent,
} = modalsSlice.actions

export const modals = modalsSlice.reducer