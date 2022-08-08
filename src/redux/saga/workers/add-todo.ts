import Cookies from 'js-cookie'
import { call, put, select } from 'typed-redux-saga'
import { addTodoFetch } from '../../../api'
import { ERROR_COLOR } from '../../../components/ui/notificator/notificator'
import { changeAuthState } from '../../slices/authSlice'
import { show } from '../../slices/noteSlice'

import { addTodo, Todo } from '../../slices/todosSlice'

type AddTodoResponse = {
    data: Todo
}

export function * addTodoWorker () {
  try {
    yield put(show({ message: '', color: '' }))
    const { userId } = yield select(state => state.auth)
    const token = Cookies.get('token')
    if (token) {
      const response: AddTodoResponse = yield call(addTodoFetch, userId, token)
      yield put(addTodo({ ...response.data }))
    } else { throw new Error('Authorize please!') }
  } catch (error: any) {
    yield put(changeAuthState({ userId: '', authLoading: false, userName: '', isAuth: false }))
    yield put(show({ message: String(error.response?.data?.message || error.response?.data || error.message), color: ERROR_COLOR }))
  }
}
