import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import axios from 'axios'
// import Cookies from 'js-cookie'

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
// type CreateUserResponse = {status: number, data: { username: string, password: string } }

// export const loginUser = createAsyncThunk('auth/loginUser', async (userData: { login: any, password: any }, { rejectWithValue, dispatch }) => {
//   dispatch(switchLoadingState({ authLoading: true }))

//   const response = await axios.post('http://localhost:5500/auth', {
//     username: userData.login,
//     password: userData.password
//   })
//   if (response.status === 200 || response.status === 201) {
//     dispatch(changeAuthState({ isAuth: true, userName: userData.login, token: response.data.access_token, authLoading: false }))
//     Cookies.set('jwt', response.data.access_token, { expires: 1 / 1440 })
//   }

//   dispatch(switchLoadingState({ authLoading: false }))
// })

// export const createUser = createAsyncThunk('auth/createUser', async (userData: { login: any, password: any }, { rejectWithValue, dispatch }) => {
//   dispatch(switchLoadingState({ authLoading: true }))
//   const response = await axios.post<Promise<any>, CreateUserResponse>('http://localhost:5500/users/create', {
//     username: userData.login,
//     password: userData.password
//   })

//   if (response.status === 200 || response.status === 201) {
//     dispatch(loginUser({ login: response.data.username, password: response.data.password }))
//   }
// })

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
