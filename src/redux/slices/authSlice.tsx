import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  authLoading: boolean
    isAuth: boolean
    userName: string

  userId: string
}

const initialState: AuthState = {
  authLoading: false,
  isAuth: false,
  userName: 'Unknown',

  userId: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthState: (state, action: PayloadAction<AuthState>) => {
      state.isAuth = action.payload.isAuth

      state.userName = action.payload.userName
      state.userId = action.payload.userId
    },
    switchLoadingState: (state, action: PayloadAction<Pick<AuthState, 'authLoading'>>) => {
      state.authLoading = action.payload.authLoading
    }
  }
})

export const { changeAuthState, switchLoadingState } = authSlice.actions

export default authSlice.reducer
