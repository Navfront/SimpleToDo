import { call, put, select } from 'typed-redux-saga'
import { modifyTodoFetch } from '../../../api'
import { toggleLoadingMode } from '../../slices/appSlice'
import { modifyTodo, Todo } from '../../slices/todosSlice'
import { sagaToggleDone } from '../saga-actions'

type ToggleAction = ReturnType<typeof sagaToggleDone>

export function * toggleTodoWorker (action: ToggleAction) {
  try {
    yield put(toggleLoadingMode())
    const { token, userId } = yield select(state => state.auth)
    const response: Todo = yield call(modifyTodoFetch, userId, action.payload, token)
    if (response) {
      yield put(modifyTodo(response))
    }
    yield put(toggleLoadingMode())
  } catch (error) {
    console.log(error)
    yield put(toggleLoadingMode())
  }
}
