
export const sagaActionTypes = {
  login: 'SAGA_LOGIN',
  register: 'SAGA_REGISTER'
}

const sagaLogin = (login: string, password: string) => {
  return { type: sagaActionTypes.login, payload: { login, password } }
}

const sagaRegister = (login: string, password: string) => {
  return { type: sagaActionTypes.register, payload: { login, password } }
}

export { sagaLogin, sagaRegister }
