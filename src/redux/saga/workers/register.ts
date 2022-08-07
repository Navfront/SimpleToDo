import { call, put } from 'typed-redux-saga'
import { getUserDataFetch, registerUser } from '../../../api'
import { toggleLoadingMode } from '../../slices/appSlice'
import { changeAuthState } from '../../slices/authSlice'
import { show } from '../../slices/noteSlice'
import { TokenResponse, UserAction } from '../watchers'
import { ResponseUserData } from './login'

export function * registerWorker (data: UserAction) {
  try {
    yield put(toggleLoadingMode())
    yield put(changeAuthState({ userId: '', authLoading: true, userName: '', isAuth: false, token: '' }))
    const response: TokenResponse = yield call(registerUser, data.payload.login, data.payload.password)
    const userData: ResponseUserData = yield call(getUserDataFetch, data.payload.login, response.data.token)
    yield put(changeAuthState({ authLoading: false, userName: data.payload.login, isAuth: true, token: response.data.token, userId: userData.userId }))
    yield put(toggleLoadingMode())
    yield put(show({ message: 'Registration is successful!', color: 'lightgreen' }))
  } catch (error: any) {
    yield put(changeAuthState({ userId: '', authLoading: false, userName: '', isAuth: false, token: '' }))
    yield put(toggleLoadingMode())
    yield put(show({ message: String(error.response.data.message || error.response.data), color: 'red' }))
  }
}
