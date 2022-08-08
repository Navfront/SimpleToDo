import { call, put } from 'typed-redux-saga'
import { getUserDataFetch, loginUser } from '../../../api'
import { toggleLoadingMode } from '../../slices/appSlice'
import { changeAuthState } from '../../slices/authSlice'
import { show } from '../../slices/noteSlice'
import { setTodos, Todo } from '../../slices/todosSlice'
import { TokenResponse, UserAction } from '../watchers'
import Cookies from 'js-cookie'
import { ERROR_COLOR, SUCCESS_COLOR } from '../../../components/ui/notificator/notificator'

export type ResponseUserData = {
  todos: Todo[];
  userId: string;
  username: string;
};

export function * loginWorker (data: UserAction) {
  try {
    yield put(show({ message: '', color: '' }))
    yield put(toggleLoadingMode())
    yield put(changeAuthState({ userId: '', authLoading: true, userName: '', isAuth: false }))
    const response: TokenResponse = yield call(loginUser, data.payload.login, data.payload.password)
    Cookies.set('token', response.data.token, { expires: 1 / 24 / 12 })
    const userData: ResponseUserData = yield call(getUserDataFetch, data.payload.login, response.data.token)
    yield put(
      changeAuthState({ userId: userData.userId, authLoading: false, userName: userData.username, isAuth: true })
    )
    yield put(setTodos(userData.todos))
    yield put(toggleLoadingMode())
    yield put(show({ message: 'Login successful!', color: SUCCESS_COLOR }))
  } catch (error: any) {
    yield put(changeAuthState({ userId: '', authLoading: false, userName: '', isAuth: false }))
    yield put(toggleLoadingMode())
    yield put(show({ message: String(error.response.data.message || error.response.data), color: ERROR_COLOR }))
  }
}
