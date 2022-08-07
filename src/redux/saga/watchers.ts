import { takeEvery } from 'typed-redux-saga'

import { sagaActionTypes } from './saga-actions'
import { loginWorker } from './workers/login'
import { registerWorker } from './workers/register'

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
