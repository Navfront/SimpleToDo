import Cookies from 'js-cookie'
import { call, put, select } from 'typed-redux-saga'
import { modifyTodoFetch } from '../../../api'
import { changeAuthState } from '../../slices/authSlice'
import { show } from '../../slices/noteSlice'
import { modifyTodo, Todo } from '../../slices/todosSlice'
import { sagaToggleDone } from '../saga-actions'
import { ERROR_COLOR } from './../../../components/ui/notificator/notificator'

type ToggleAction = ReturnType<typeof sagaToggleDone>

export function * toggleTodoWorker (action: ToggleAction) {
  try {
    yield put(show({ message: '', color: '' }))
    const { userId } = yield select(state => state.auth)
    const token = Cookies.get('token')
    if (token) {
      const response: Todo = yield call(modifyTodoFetch, userId, action.payload, token)
      if (response) {
        yield put(modifyTodo(response))
      }
    } else { throw new Error('Authorize please!') }
  } catch (error: any) {
    yield put(changeAuthState({ userId: '', authLoading: false, userName: '', isAuth: false }))
    yield put(show({ message: String(error.response?.data?.message || error.response?.data || error.message), color: ERROR_COLOR }))
  }
}
