import { all, call } from 'typed-redux-saga'
import { watchLogin, watchRegister } from './watchers'

export default function * rootSaga () {
  yield all([call(watchLogin), call(watchRegister)])
}
