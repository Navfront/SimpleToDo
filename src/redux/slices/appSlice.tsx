import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ApplicationState{
  isLoading: boolean
  isModalShow: boolean
}

const initialState: ApplicationState = {
  isLoading: false,
  isModalShow: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleLoadingMode: (state) => {
      state.isLoading = !state.isLoading
    },
    changeModalShow: (state, action: PayloadAction<boolean>) => {
      state.isModalShow = action.payload
    }

  }
})

export const { toggleLoadingMode, changeModalShow } = appSlice.actions
export default appSlice.reducer
