import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit'

  const initialState = {
    sidebar: true,
    viewport: '',
    cache: undefined,
  }

  export const miscSlice = createSlice({
    name: 'misc',
    initialState,
    reducers: {
      toggleSidebar(state){
        state.sidebar = !state.sidebar
      },
      setViewport(state, { payload }: PayloadAction<string>){ state.viewport = payload },
    }
  })
  
  export const {
    toggleSidebar,
  } = miscSlice.actions
  
  export const misc = miscSlice.reducer