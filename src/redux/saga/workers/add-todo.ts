import { call, put, select } from 'typed-redux-saga'
import { addTodoFetch } from '../../../api'

import { addTodo, Todo } from '../../slices/todosSlice'

type AddTodoResponse = {
    data: Todo
}

export function * addTodoWorker () {
  try {
    const { token, userId } = yield select(state => state.auth)
    const response: AddTodoResponse = yield call(addTodoFetch, userId, token)
    yield put(addTodo({ ...response.data }))
  } catch (error: any) {
    console.log(error)
  }
}
