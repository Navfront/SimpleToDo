import Cookies from 'js-cookie'
import { call, put } from 'typed-redux-saga'
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
    const token = Cookies.get('token')
    if (token) {
      const response: GetTodosResponse = yield call(getTodosFetch, token)
      yield put(setTodos(response.data))
      yield put(toggleLoadingMode())
    } else {
      yield put(toggleLoadingMode())
      throw new Error('Authorize please!')
    }
  } catch (error: any) {
    yield put(show({ message: String(error.response.data.message || error.response.data || error.message), color: ERROR_COLOR }))
    yield put(toggleLoadingMode())
  }
}
