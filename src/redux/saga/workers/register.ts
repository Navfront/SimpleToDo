import { call, put } from 'typed-redux-saga'
import { getUserDataFetch, registerUser } from '../../../api'
import { toggleLoadingMode } from '../../slices/appSlice'
import { changeAuthState } from '../../slices/authSlice'
import { show } from '../../slices/noteSlice'
import { TokenResponse, UserAction } from '../watchers'
import { ResponseUserData } from './login'
import { ERROR_COLOR, SUCCESS_COLOR } from './../../../components/ui/notificator/notificator'
import Cookies from 'js-cookie'
import { setTodos } from '../../slices/todosSlice'

export function * registerWorker (data: UserAction) {
  try {
    yield put(toggleLoadingMode())
    yield put(changeAuthState({ userId: '', authLoading: true, userName: '', isAuth: false }))
    const response: TokenResponse = yield call(registerUser, data.payload.login, data.payload.password)
    Cookies.set('token', response.data.token, { expires: 1 / 24 / 12 })
    const userData: ResponseUserData = yield call(getUserDataFetch, data.payload.login, response.data.token)
    yield put(setTodos(userData.todos))
    yield put(changeAuthState({ authLoading: false, userName: data.payload.login, isAuth: true, userId: userData.userId }))
    yield put(toggleLoadingMode())
    yield put(show({ message: 'Registration is successful!', color: SUCCESS_COLOR }))
  } catch (error: any) {
    yield put(changeAuthState({ userId: '', authLoading: false, userName: '', isAuth: false }))
    yield put(toggleLoadingMode())
    yield put(show({ message: String(error.response?.data?.message || error.response?.data || error.message), color: ERROR_COLOR }))
  }
}
