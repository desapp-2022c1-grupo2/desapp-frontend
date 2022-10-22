import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAdmin, IJtp, IStudent } from '@src/models_copy'

  const initialState = {
    jtp: {
      selected: {},
      delete: false,
      update: false,
    },
    student: {
      selected: {},
      delete: false,
      update: false,
    },
    admin: {
      selected: {},
      delete: false,
      update: false,
    }
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
      setUpdateStudentModal(state, { payload }: PayloadAction<boolean>) { state.student.update = payload },
      
      selectAdmin(state, { payload }: PayloadAction<IAdmin>) { state.admin.selected = payload },
      selectJtp(state, { payload }: PayloadAction<IJtp>) { state.jtp.selected = payload },
      selectStudent(state, { payload }: PayloadAction<IStudent>) { state.student.selected = payload },
    }
  })
  
  export const {
    setDeleteAdminModal,
    setUpdateAdminModal,
    setDeleteJtpModal,
    setUpdateJtpModal,
    setDeleteStudentModal,
    setUpdateStudentModal,
    selectAdmin,
    selectJtp,
    selectStudent
  } = modalsSlice.actions
  
  export const modals = modalsSlice.reducer