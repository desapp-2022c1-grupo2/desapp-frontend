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
    details: boolean,
    update: boolean,
  },
  student: {
    selected?: IStudent,
    delete: boolean,
    details: boolean,
    update: boolean,
  },
  admin: {
    selected?: IAdmin,
    delete: boolean,
    update: boolean,
  },
  assignment: { details: boolean }
}

const initialState: userModals = {
  logout: false,
  jtp: { delete: false, details: false, update: false },
  student: { delete: false, details: false, update: false },
  admin: { delete: false, update: false },
  assignment: { details: false }
}

export const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    selectAdmin(state, { payload }: PayloadAction<IAdmin>) { state.admin.selected = payload },
    selectJtp(state, { payload }: PayloadAction<IJtp>) { state.jtp.selected = payload },
    selectStudent(state, { payload }: PayloadAction<IStudent>) { state.student.selected = payload },
    
    setDeleteAdminModal(state, { payload }: PayloadAction<boolean>) { state.admin.delete = payload },
    setDeleteJtpModal(state, { payload }: PayloadAction<boolean>) { state.jtp.delete = payload },
    setDeleteStudentModal(state, { payload }: PayloadAction<boolean>) { state.student.delete = payload },

    setJtpDetailModal(state, { payload }: PayloadAction<boolean>) { state.jtp.details = payload },
    setStudentDetailModal(state, { payload }: PayloadAction<boolean>) { state.student.details = payload },
    setStudentAssignmentModal(state, { payload }: PayloadAction<boolean>) { state.assignment.details = payload },

    setLogoutModal(state, { payload }: PayloadAction<boolean>) { state.logout = payload },

    setUpdateAdminModal(state, { payload }: PayloadAction<boolean>) { state.admin.update = payload },
    setUpdateJtpModal(state, { payload }: PayloadAction<boolean>) { state.jtp.update = payload },
    setUpdateStudentModal(state, { payload }: PayloadAction<boolean>) { state.student.update = payload },

    unselectAdmin(state) { state.admin.selected = undefined },
    unselectJtp(state) { state.student.selected = undefined },
    unselectStudent(state) { state.student.selected = undefined }
  }
})

export const {
  selectAdmin,
  selectJtp,
  selectStudent,
  setDeleteAdminModal,
  setDeleteJtpModal,
  setDeleteStudentModal,
  setJtpDetailModal,
  setStudentDetailModal,
  setStudentAssignmentModal,
  setLogoutModal,
  setUpdateAdminModal,
  setUpdateJtpModal,
  setUpdateStudentModal,
  unselectAdmin,
  unselectJtp,
  unselectStudent,
} = modalsSlice.actions

export const modals = modalsSlice.reducer