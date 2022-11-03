import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebar: false,
}



export const miscSlice = createSlice({
  name: 'misc',
  initialState,
  reducers: {
    toggleSidebar(state){
      state.sidebar = !state.sidebar
    }
  }
})

export const {
  toggleSidebar,
} = miscSlice.actions

export const misc = miscSlice.reducer