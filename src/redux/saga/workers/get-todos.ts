import { call, put, select } from 'typed-redux-saga'
import { getTodosFetch } from '../../../api'
import { ERROR_COLOR } from '../../../components/ui/notificator/notificator'
import { toggleLoadingMode } from '../../slices/appSlice'
import { show } from '../../slices/noteSlice'
import { setTodos, Todo } from '../../slices/todosSlice'

type GetTodosResponse = {
    data: Todo[]
}

export function * getTodosWorker () {
  try {
    yield put(toggleLoadingMode())
    const token: string = yield select(state => state.auth.token)
    const response: GetTodosResponse = yield call(getTodosFetch, token)
    yield put(setTodos(response.data))
    yield put(toggleLoadingMode())
  } catch (error: any) {
    yield put(show({ message: String(error.response.data.message || error.response.data), color: ERROR_COLOR }))
    yield put(toggleLoadingMode())
  }
}
