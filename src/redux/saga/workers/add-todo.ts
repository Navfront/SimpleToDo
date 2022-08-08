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
    const { token, userId } = yield select(state => state.auth)
    const response: AddTodoResponse = yield call(addTodoFetch, userId, token)
    yield put(addTodo({ ...response.data }))
  } catch (error: any) {
    yield put(changeAuthState({ userId: '', authLoading: false, userName: '', isAuth: false, token: '' }))
    yield put(show({ message: String(error.response.data.message || error.response.data), color: ERROR_COLOR }))
  }
}
