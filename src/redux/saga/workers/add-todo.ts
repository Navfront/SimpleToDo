import { call, put } from 'typed-redux-saga'
import { addTodoFetch } from '../../../api'
import { toggleLoadingMode } from '../../slices/appSlice'
import { addTodo, Todo } from '../../slices/todosSlice'

type AddTodoResponse = {
    data: Todo
}

export function * addTodoWorker () {
  try {
    yield put(toggleLoadingMode())
    const response: AddTodoResponse = yield call(addTodoFetch)
    yield put(addTodo({ ...response.data }))
    yield put(toggleLoadingMode())
  } catch (error: any) {
    console.log(error)
    yield put(toggleLoadingMode())
  }
}
