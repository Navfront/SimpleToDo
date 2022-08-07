import { call, put, select } from 'typed-redux-saga'
import { modifyTodoFetch } from '../../../api'
import { modifyTodo, Todo } from '../../slices/todosSlice'
import { sagaToggleDone } from '../saga-actions'

type ToggleAction = ReturnType<typeof sagaToggleDone>

export function * toggleTodoWorker (action: ToggleAction) {
  try {
    const { token, userId } = yield select(state => state.auth)
    const response: Todo = yield call(modifyTodoFetch, userId, action.payload, token)
    if (response) {
      yield put(modifyTodo(response))
    }
  } catch (error) {
    console.log(error)
  }
}
