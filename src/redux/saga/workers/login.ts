import { call, put } from 'typed-redux-saga'
import { loginUser } from '../../../api'
import { toggleLoadingMode } from '../../slices/appSlice'
import { changeAuthState } from '../../slices/authSlice'
import { show } from '../../slices/noteSlice'
import { TokenResponse, UserAction } from '../watchers'

export function * loginWorker (data: UserAction) {
  try {
    yield put(toggleLoadingMode())
    yield put(changeAuthState({ authLoading: true, userName: '', isAuth: false, token: '' }))
    const response: TokenResponse = yield call(loginUser, data.payload.login, data.payload.password)
    yield put(changeAuthState({ authLoading: false, userName: data.payload.login, isAuth: true, token: response.data.token }))
    yield put(toggleLoadingMode())
    yield put(show({ message: 'Login successful!', color: 'lightgreen' }))
  } catch (error: any) {
    yield put(changeAuthState({ authLoading: false, userName: '', isAuth: false, token: '' }))
    yield put(toggleLoadingMode())
    yield put(show({ message: String(error.response.data.message || error.response.data), color: 'red' }))
  }
}