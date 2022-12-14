import { takeEvery } from 'typed-redux-saga'
import { sagaActionTypes } from './saga-actions'
import { addTodoWorker } from './workers/add-todo'
import { deleteTodoWorker } from './workers/delete-todo'
import { getTodosWorker } from './workers/get-todos'
import { loginWorker } from './workers/login'
import { modifyTodoWorker } from './workers/modify-todo'
import { registerWorker } from './workers/register'
import { toggleTodoWorker } from './workers/toggle-todo'

export type UserAction = {
  type: string,
  payload: {login: string, password: string}
}

export type TokenResponse = { data: {token: string} }

// watchers

export function * watchLogin () {
  yield takeEvery(sagaActionTypes.login, loginWorker)
}

export function * watchRegister () {
  yield takeEvery(sagaActionTypes.register, registerWorker)
}

export function * watchGetTodos () {
  yield takeEvery(sagaActionTypes.get, getTodosWorker)
}

export function * watchAddTodo () {
  yield takeEvery(sagaActionTypes.add, addTodoWorker)
}

export function * watchDeleteTodo () {
  yield takeEvery(sagaActionTypes.delete, deleteTodoWorker)
}

export function * watchToggleTodo () {
  yield takeEvery(sagaActionTypes.toggleDone, toggleTodoWorker)
}

export function * watchModifyTodo () {
  yield takeEvery(sagaActionTypes.modify, modifyTodoWorker)
}
