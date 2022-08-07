import { call, put } from 'typed-redux-saga'
import { getUserDataFetch, loginUser } from '../../../api'
import { toggleLoadingMode } from '../../slices/appSlice'
import { changeAuthState } from '../../slices/authSlice'
import { show } from '../../slices/noteSlice'
import { setTodos, Todo } from '../../slices/todosSlice'
import { TokenResponse, UserAction } from '../watchers'

export type ResponseUserData = {
  todos: Todo[];
  userId: string;
  username: string;
};

export function * loginWorker (data: UserAction) {
  try {
    yield put(toggleLoadingMode())
    yield put(changeAuthState({ userId: '', authLoading: true, userName: '', isAuth: false, token: '' }))
    const response: TokenResponse = yield call(loginUser, data.payload.login, data.payload.password)
    const userData: ResponseUserData = yield call(getUserDataFetch, data.payload.login, response.data.token)
    yield put(
      changeAuthState({ userId: userData.userId, authLoading: false, userName: userData.username, isAuth: true, token: response.data.token })
    )
    yield put(setTodos(userData.todos))
    yield put(toggleLoadingMode())
    yield put(show({ message: 'Login successful!', color: 'lightgreen' }))
  } catch (error: any) {
    yield put(changeAuthState({ userId: '', authLoading: false, userName: '', isAuth: false, token: '' }))
    yield put(toggleLoadingMode())
    yield put(show({ message: String(error.response.data.message || error.response.data), color: 'red' }))
  }
}
