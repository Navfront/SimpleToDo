import { call, put, select } from 'typed-redux-saga'
import { addTodoFetch } from '../../../api'
import { toggleLoadingMode } from '../../slices/appSlice'
import { addTodo, Todo } from '../../slices/todosSlice'

type AddTodoResponse = {
    data: Todo
}

export function * addTodoWorker () {
  try {
    yield put(toggleLoadingMode())
    const { token, userId } = yield select(state => state.auth)
    const response: AddTodoResponse = yield call(addTodoFetch, userId, token)
    yield put(addTodo({ ...response.data }))
    yield put(toggleLoadingMode())
  } catch (error: any) {
    console.log(error)
    yield put(toggleLoadingMode())
  }
}
