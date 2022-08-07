import { takeEvery, all, call } from 'redux-saga/effects'
import { sagaActionTypes } from './saga-actions'

function * log (data:any) {
  console.log('logining', data)
}

export function * watchLogin () {
  yield takeEvery(sagaActionTypes.login, log)
}

export function * watchRegister () {
  yield takeEvery(sagaActionTypes.register, log)
}

export default function * rootSaga () {
  yield all([call(watchLogin), call(watchRegister)])
}
