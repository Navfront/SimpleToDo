
import { createSlice } from '@reduxjs/toolkit'
export interface AppState{
    isLoading: boolean
}

const initialState: AppState = {
  isLoading: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLoadingMode: (state) => {
      state.isLoading = !state.isLoading
    }
  }
})

export const { changeLoadingMode } = appSlice.actions
export default appSlice.reducer
