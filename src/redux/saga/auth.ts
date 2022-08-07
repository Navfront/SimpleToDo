import { takeEvery, all, call } from 'typed-redux-saga'

import { sagaActionTypes } from './saga-actions'
import { loginWorker } from './workers/login'
import { registerWorker } from './workers/register'

export type UserAction = {
  type: string,
  payload: {login: string, password: string}
}

export type TokenResponse = { data: {token: string} }

// watchers

function * watchLogin () {
  yield takeEvery(sagaActionTypes.login, loginWorker)
}

function * watchRegister () {
  yield takeEvery(sagaActionTypes.register, registerWorker)
}

export default function * rootSaga () {
  yield all([call(watchLogin), call(watchRegister)])
}
