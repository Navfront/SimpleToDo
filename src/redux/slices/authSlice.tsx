import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    isAuth: boolean
    userName: string
    token: string
}

const initialState: AuthState = {
  isAuth: false,
  userName: 'Unknown',
  token: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthState: (state, action: PayloadAction<AuthState>) => {
      state.isAuth = action.payload.isAuth
      state.token = action.payload.token
      state.userName = action.payload.userName
    }

  }
})

export const { changeAuthState } = authSlice.actions

export default authSlice.reducer
