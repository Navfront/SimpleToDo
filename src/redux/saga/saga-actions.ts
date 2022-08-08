import { Todo } from '../slices/todosSlice'

export const sagaActionTypes = {
  login: 'SAGA_LOGIN',
  register: 'SAGA_REGISTER',
  get: 'SAGA_GET_TODOS',
  add: 'SAGA_ADD_TODO',
  delete: 'SAGA_DELETE_TODO',
  modify: 'SAGA_MODIFY_TODO',
  toggleDone: 'SAGA_TOGGLE_TODO_DONE'
}

const sagaLogin = (login: string, password: string) => {
  return { type: sagaActionTypes.login, payload: { login, password } }
}

const sagaRegister = (login: string, password: string) => {
  return { type: sagaActionTypes.register, payload: { login, password } }
}

const sagaGetTodos = () => ({ type: sagaActionTypes.get })

const sagaAddTodo = () => ({ type: sagaActionTypes.add })

const sagaDeleteTodo = (todoId: string) => ({ type: sagaActionTypes.delete, payload: todoId })

const sagaModify = (todo: Todo) => ({ type: sagaActionTypes.modify, payload: todo })

const sagaToggleDone = (todo: Todo) => ({ type: sagaActionTypes.toggleDone, payload: todo })

export { sagaLogin, sagaRegister, sagaAddTodo, sagaDeleteTodo, sagaModify, sagaToggleDone, sagaGetTodos }
