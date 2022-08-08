import { all, call } from 'typed-redux-saga'
import { watchAddTodo, watchGetTodos, watchLogin, watchRegister, watchToggleTodo, watchDeleteTodo, watchModifyTodo } from './watchers'

export default function * rootSaga () {
  yield all([call(watchLogin), call(watchRegister), call(watchGetTodos), call(watchAddTodo), call(watchToggleTodo), call(watchDeleteTodo), call(watchModifyTodo)])
}
