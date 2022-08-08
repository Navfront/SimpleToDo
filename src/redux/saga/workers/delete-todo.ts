import { call, put, select } from 'typed-redux-saga'
import { deleteTodoFetch } from '../../../api'
import { ERROR_COLOR } from '../../../components/ui/notificator/notificator'
import { changeAuthState } from '../../slices/authSlice'
import { show } from '../../slices/noteSlice'
import { removeTodo } from '../../slices/todosSlice'

type RemoveTodoResponse = {
    data: boolean
}

export function * deleteTodoWorker (action: { type: string, payload: string }) {
  console.log(action)

  try {
    yield put(show({ message: '', color: '' }))
    const { token, userId } = yield select(state => state.auth)
    const isRemoved: RemoveTodoResponse = yield call(deleteTodoFetch, userId, action.payload, token)
    if (isRemoved) {
      yield put(removeTodo({ todoId: action.payload }))
    }
  } catch (error: any) {
    yield put(changeAuthState({ userId: '', authLoading: false, userName: '', isAuth: false, token: '' }))
    yield put(show({ message: String(error.response.data.message || error.response.data), color: ERROR_COLOR }))
  }
}
