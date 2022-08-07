import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ApplicationState{
  isLoading: boolean
  isModalShow: boolean
  targetTodoId: string
}

const initialState: ApplicationState = {
  isLoading: false,
  isModalShow: false,
  targetTodoId: ''
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleLoadingMode: (state) => {
      state.isLoading = !state.isLoading
    },
    changeModalShow: (state, action: PayloadAction<ApplicationState>) => {
      state.isModalShow = action.payload.isModalShow
      state.targetTodoId = action.payload.targetTodoId
    }

  }
})

export const { toggleLoadingMode, changeModalShow } = appSlice.actions
export default appSlice.reducer
