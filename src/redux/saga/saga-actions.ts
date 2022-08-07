
export const sagaActionTypes = {
  login: 'SAGA_LOGIN',
  register: 'SAGA_REGISTER',
  add: 'SAGA_ADD',
  delete: 'SAGA_DELETE',
  modify: 'SAGA_MODIFY',
  toggleDone: 'SAGA_TOGGLE_DONE'
}

const sagaLogin = (login: string, password: string) => {
  return { type: sagaActionTypes.login, payload: { login, password } }
}

const sagaRegister = (login: string, password: string) => {
  return { type: sagaActionTypes.register, payload: { login, password } }
}

const sagaAddTodo = () => ({ type: sagaActionTypes.add })

const sagaDeleteTodo = (todoId: string) => ({ type: sagaActionTypes.delete, payload: todoId })

const sagaModify = (todoId: string, title: string) => ({ type: sagaActionTypes.modify, payload: { todoId, title } })

const sagaToggleDone = (todoId: string) => ({ type: sagaActionTypes.toggleDone, payload: todoId })

export { sagaLogin, sagaRegister, sagaAddTodo, sagaDeleteTodo, sagaModify, sagaToggleDone }
