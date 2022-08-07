import { call, put, select } from 'typed-redux-saga'
import { getTodosFetch } from '../../../api'
import { toggleLoadingMode } from '../../slices/appSlice'
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
    console.log(error)
    yield put(toggleLoadingMode())
  }
}
