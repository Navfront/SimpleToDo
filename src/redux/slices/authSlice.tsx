import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export interface AuthState {
  authLoading: boolean
    isAuth: boolean
    userName: string
    token: string
}

const initialState: AuthState = {
  authLoading: false,
  isAuth: false,
  userName: 'Unknown',
  token: ''
}

export const postUserData = createAsyncThunk('auth/postUserData', async (userData: { login: any, password: any }, { rejectWithValue, dispatch }) => {
  dispatch(switchLoadingState({ authLoading: true }))
  const response = await axios.post('http://localhost:5500/auth', {
    username: userData.login,
    password: userData.password
  })

  console.log('response', response.status)

  if (response.status === 200 || response.status === 201) {
    dispatch(switchLoadingState({ authLoading: false }))
    dispatch(changeAuthState({ isAuth: true, userName: userData.login, token: response.data.access_token, authLoading: false }))
  }
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthState: (state, action: PayloadAction<AuthState>) => {
      state.isAuth = action.payload.isAuth
      state.token = action.payload.token
      state.userName = action.payload.userName
    },
    switchLoadingState: (state, action: PayloadAction<Pick<AuthState, 'authLoading'>>) => {
      state.authLoading = action.payload.authLoading
    }
  }
})

export const { changeAuthState, switchLoadingState } = authSlice.actions

export default authSlice.reducer
